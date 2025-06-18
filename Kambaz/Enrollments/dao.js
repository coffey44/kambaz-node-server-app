import { v4 as uuidv4 } from "uuid";

let enrollments = [];

export const findAllEnrollments = () => enrollments;

export const enrollUserInCourse = (userId, courseId) => {
  if (!enrollments.some(e => e.user === userId && e.course === courseId)) {
    const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
    enrollments.push(newEnrollment);
    return newEnrollment;
  }
  return null;
};

export const unenrollUserFromCourse = (userId, courseId) => {
  enrollments = enrollments.filter(e => !(e.user === userId && e.course === courseId));
};

export const findEnrollmentsForUser = (userId) =>
  enrollments.filter(e => e.user === userId);

export const findEnrollmentsForCourse = (courseId) =>
  enrollments.filter(e => e.course === courseId);