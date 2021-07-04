const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const tasks = [];

app.get("/", function (req, res) {
  res.send(tasks);
});

app.post("/api/new_task", function (req, res) {
  const body = req.body;
  if (body.name && body.points) {
    tasks.push({
      id: new Date().getTime(),
      name: body.name,
      points: body.points,
    });
    res.send("New task added");
  } else {
    res.send("Task wasn't added");
  }
});

app.patch("/tasks/:id", function (req, res) {
  const task = tasks.find((x) => x.id == req.params.id);
  if (task) {
    task.lastUpdate = new Date();
    res.send(`Task ${task.name} updated`);
  } else {
    res.send("Task wasn't updated");
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
