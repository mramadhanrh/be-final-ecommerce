import bcrypt from "bcrypt";
import { saltRounds } from "../constants/hash.js";

export const generatePasswordHash = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

export const comparePassword = async (password, encrypted) =>
  await bcrypt.compare(password, encrypted);
