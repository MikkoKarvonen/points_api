const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const tasks = [];

app.get("/", function (req, res) {
  res.send(tasks);
});

app.post("/api/new_task", function (req, res) {
  console.log(req.body);
  const body = req.body;
  if (body.name && body.points) {
    tasks.push({ name: body.name, points: body.points });
    res.send("New task added");
  } else {
    res.send("Task wasn't added");
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
