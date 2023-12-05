import express from "express";
import jwt from "jsonwebtoken";
import httpResponseMessage from "../constants/httpResponseMessage.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const handleValidateAccess = async (request, response, next) => {
  try {
    // Headers di set di client, dengan melampirkan jwt ke headers request
    const { "x-access-token": accessToken } = request.headers;

    // JWT di validasi apakah valid untuk mengakses API
    await jwt.verify(accessToken, process.env.JWT_SECRET);

    next();
  } catch (e) {
    // Saat validasi jwt.verify error, dia akan masuk ke catch
    // Karena secara default jwt akan melempar error jika access token tidak valid
    response.status(401).json({
      message: httpResponseMessage[response.statusCode],
    });
  }
};
