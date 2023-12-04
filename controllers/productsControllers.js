import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../services/productsServices.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getProductItem = async (request, response) => {
  const id = request.params.id;

  const product = await getProductById(id);

  if (product === null) {
    return response.status(404).json({
      message: "Data not found",
    });
  }

  response.json({
    data: product,
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getProductList = async (request, response) => {
  const productList = await getAllProducts();
  response.json({
    data: productList,
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postCreateProduct = async (request, response) => {
  const { name, description, image, price } = request.body;

  const product = await createProduct(name, description, image, price);

  response.json({
    data: product,
  });
};
