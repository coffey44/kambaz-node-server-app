import express from "express";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import cors from "cors";
import session from "express-session";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import assignmentRoutes from "./Kambaz/Assignments/routes.js";
import enrollmentRoutes from "./Kambaz/Enrollments/routes.js";


const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
  })
); // make sure cors is configured BEFORE session

app.use(
  session({
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
  })
); // make sure session is configured BEFORE express.json

app.use(express.json()); // make sure express.json is configured BEFORE all routes
app.use("/api/assignments", assignmentRoutes);
app.use("/api/enrollments", enrollmentRoutes);

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});