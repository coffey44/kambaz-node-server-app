import express from "express";
import * as dao from "./dao.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(dao.findAllEnrollments());
});

router.post("/", (req, res) => {
  const { user, course } = req.body;
  const enrollment = dao.enrollUserInCourse(user, course);
  if (enrollment) res.json(enrollment);
  else res.status(400).json({ message: "Already enrolled" });
});

router.delete("/", (req, res) => {
  const { user, course } = req.body;
  dao.unenrollUserFromCourse(user, course);
  res.sendStatus(204);
});

router.get("/user/:userId", (req, res) => {
  res.json(dao.findEnrollmentsForUser(req.params.userId));
});

router.get("/course/:courseId", (req, res) => {
  res.json(dao.findEnrollmentsForCourse(req.params.courseId));
});

export default router;