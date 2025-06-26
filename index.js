import express from "express";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import cors from "cors";
import session from "express-session";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import assignmentRoutes from "./Kambaz/Assignments/routes.js";
import enrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
  })
);


app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());

app.use("/api/assignments", assignmentRoutes);
app.use("/api/enrollments", enrollmentRoutes);

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
