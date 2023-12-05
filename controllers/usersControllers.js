import express from "express";
import { createUser, getUserByEmail } from "../services/usersServices.js";
import { generatePasswordHash } from "../utils/passwordOperations.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postCreateUser = async (request, response, next) => {
  try {
    const { firstName, lastName, email, password } = request.body;
    const findUser = await getUserByEmail(email);

    if (findUser) {
      return response.status(409).json({
        message: "User already exist",
      });
    }

    const encryptedPassword = await generatePasswordHash(password);
    await createUser(firstName, lastName, email, encryptedPassword);

    response.status(201).json({
      message: "User successfully created",
    });
  } catch (e) {
    next(e);
  }
};
