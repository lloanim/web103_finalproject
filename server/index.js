import express from "express";
import cors from "cors";
import "./db/pool.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Feature routers are mounted here, e.g.
// app.use("/api/pantry-items", pantryRouter);

app.use("/api", (_req, res) => res.status(404).json({ error: "Not found." }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong on the server." });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`PrepWise API on http://localhost:${PORT}`));
