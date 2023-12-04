import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Products = sequelize.define("Products", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  price: DataTypes.INTEGER,
});

export default Products;
