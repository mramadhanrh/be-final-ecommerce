import express from "express";
import { comparePassword } from "../utils/passwordOperations.js";
import { getUserByEmail } from "../services/usersServices.js";
import httpResponseMessage from "../constants/httpResponseMessage.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postAuthenticateUser = async (request, response, next) => {
  try {
    const { email = "", password } = request.body || {};

    const user = await getUserByEmail(email);
    if (!user) {
      response.status(404).json({
        message: httpResponseMessage[response.statusCode],
      });
      return;
    }

    const isUserValid = await comparePassword(password, user.password);
    response.json({
      data: isUserValid,
      message: httpResponseMessage[response.statusCode],
    });
  } catch (e) {
    next(e);
  }
};
