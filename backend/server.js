const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
if (!SLACK_BOT_TOKEN) {
  console.error("Missing SLACK_BOT_TOKEN in environment variables.");
  process.exit(1);
}

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("CommHub Backend Running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

const messageRoutes = require("./src/routes/messageRoutes");
app.use("/api", messageRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

