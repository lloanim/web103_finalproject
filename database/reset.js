
const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

async function resetDatabase() {
  if (process.env.CONFIRM_RESET !== "YES") {
    console.log("Reset blocked. Confirmation required.");
    return;
  }

  if (process.env.NODE_ENV === "production") {
    throw new Error("Cannot reset a production database.");
  }

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is missing.");
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  await client.connect();

  try {
    const result = await client.query(
      "SELECT current_database() AS name"
    );

    if (result.rows[0].name !== "prepwise_qt3o") {
      throw new Error("Unexpected database. Reset cancelled.");
    }

    await client.query("BEGIN");

    await client.query(`
      TRUNCATE TABLE users, ingredients, recipes
      RESTART IDENTITY CASCADE
    `);

    const seed = fs.readFileSync(
      path.join(__dirname, "seed.sql"),
      "utf8"
    );

    await client.query(seed);
    await client.query("COMMIT");

    console.log("PrepWise sample data reset successfully!");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    await client.end();
  }
}

resetDatabase().catch((error) => {
  console.error("Reset failed:", error.message);
  process.exitCode = 1;
});
