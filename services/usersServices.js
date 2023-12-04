import Users from "../models/users.js";

export const getUserByEmail = async (email) => {
  return await Users.findOne({ where: { email } });
};

export const createUser = async (firstName, lastName, email, password) => {
  return await Users.create({ firstName, lastName, email, password });
};
