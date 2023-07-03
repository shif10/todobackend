const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const { title, desc } = req.body;

  const todo = await prisma.todo.create({
    data: {
      title: title,
      desc: desc,
    },
  });

  res.json(todo);
});

app.post("/updatetodo", async (req, res) => {
  const { id, title, desc } = req.body;

  const todo = await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      desc: desc,
    },
  });
});

app.post("/tododelete", async (req, res) => {
  const { id } = req.body;
  const deletetodo = await prisma.todo.delete({
    where: {
      id: id,
    },
  });

  console.log("delete todo", deletetodo);
});
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
