import express from "express";
import * as dao from "./dao.js";

const router = express.Router();

router.get("/", (req, res) => {
  const assignments = dao.findAllAssignments();
  res.json(assignments);
});

router.get("/:aid", (req, res) => {
  const assignment = dao.findAssignmentById(req.params.aid);
  if (!assignment) return res.sendStatus(404);
  res.json(assignment);
});

router.post("/", (req, res) => {
  const assignment = dao.createAssignment(req.body);
  res.json(assignment);
});

router.put("/:aid", (req, res) => {
  const updated = dao.updateAssignment(req.params.aid, req.body);
  res.json(updated);
});

router.delete("/:aid", (req, res) => {
  dao.deleteAssignment(req.params.aid);
  res.sendStatus(204);
});

export default router;