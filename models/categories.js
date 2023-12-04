import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Categories = sequelize.define("Categories", {
  name: DataTypes.STRING,
});

export default Categories;
