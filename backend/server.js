import express from "express";
import dotenv from "dotenv";
import slackRoutes from "./src/routes/slackRoutes.js";


dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use("/slack", slackRoutes);

app.get("/", (req, res) => {
  res.send("CommHub Backend Running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

