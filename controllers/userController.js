import { v4 as uuidv4 } from "uuid";

let users = [];
export const getAllUsers = (req, res) => {
  res.send(users);
};

export const addUser = (req, res) => {
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);
  res.send(`User with the name ${user.firstname} added to the database`);
};

export const getSpeicificUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`user with id ${id} deleted successfully`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstname) user.firstname = firstname;
  if (lastname) user.lastname = lastname;
  if (age) user.age = age;
  res.send(`User with id ${id} has been updated successfully`);
};
