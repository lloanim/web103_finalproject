// Resets the local test database to its default (seeded) state.
// Usage (from backend/): npm run reset
import "dotenv/config";
import pg from "pg";
import resetModule from "../../database/reset.js";

const { resetDatabase } = resetModule;

if (!process.env.TEST_DATABASE_URL) {
  console.error(
    "TEST_DATABASE_URL is not set. Add it to backend/.env, e.g.\n" +
      "TEST_DATABASE_URL=postgres://localhost:5432/prepwise_test"
  );
  process.exit(1);
}

const client = new pg.Client({
  connectionString: process.env.TEST_DATABASE_URL
});

try {
  await client.connect();
  await resetDatabase(client);
} catch (error) {
  console.error("Reset failed:", error.message);
  process.exitCode = 1;
} finally {
  await client.end().catch(() => {});
}
