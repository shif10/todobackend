const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/todos", async (req, res) => {
  res.send("your todo app");
});
app.listen(5000, () => {
  console.log("Server is running on http://localhost:3000");
});
