import Products from "../models/products.js";

export const getProductById = async (productId) => {
  return await Products.findOne({
    where: { id: productId },
  });
};

export const getAllProducts = async () => {
  return await Products.findAll();
};

export const createProduct = async (name, description, image, price) => {
  return await Products.create({ name, description, image, price });
};
