// Assignment object
const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

// Module object
const moduleObj = {
  id: "M101",
  name: "Introduction to Express",
  description: "Basics of Express.js and routing",
  course: "CS5610",
};

export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    assignment.title = req.params.newTitle;
    res.json(assignment);
  });

  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    assignment.score = parseFloat(req.params.newScore);
    res.json(assignment);
  });

  app.get("/lab5/assignment/completed/:status", (req, res) => {
    assignment.completed = req.params.status === "true";
    res.json(assignment);
  });

  // Module Routes
  app.get("/lab5/module", (req, res) => {
    res.json(moduleObj);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.json(moduleObj.name);
  });

  app.get("/lab5/module/name/:newName", (req, res) => {
    moduleObj.name = req.params.newName;
    res.json(moduleObj);
  });

  app.get("/lab5/module/description/:newDescription", (req, res) => {
    moduleObj.description = req.params.newDescription;
    res.json(moduleObj);
  });
}
