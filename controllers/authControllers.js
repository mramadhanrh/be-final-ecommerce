import express from "express";
import jwt from "jsonwebtoken";
import { comparePassword } from "../utils/passwordOperations.js";
import { getUserByEmail } from "../services/usersServices.js";
import httpResponseMessage from "../constants/httpResponseMessage.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postAuthLogin = async (request, response, next) => {
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

    if (!isUserValid) {
      return response.status(401).json({
        message: "Invalid password",
      });
    }

    response.json({
      data: {
        accessToken: jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: 864000,
        }),
      },
    });
  } catch (e) {
    next(e);
  }
};
