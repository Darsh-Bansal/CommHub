import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("CommHub Backend Running");
});


const messageRoutes = require("./src/routes/messageRoutes");

app.use("/api", messageRoutes);


app.listen(PORT, () => console.log("Server running on port " + PORT));

