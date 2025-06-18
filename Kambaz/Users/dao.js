import { v4 as uuidv4 } from "uuid";

// In-memory users array
let users = [];

export const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4() };
  users = [...users, newUser];
  return newUser;
};

export const findUserByUsername = (username) =>
  users.find((user) => user.username === username);

export const updateUser = (userId, user) =>
  users = users.map((u) => (u._id === userId ? { ...u, ...user } : u));

export const getAllUsers = () => users;