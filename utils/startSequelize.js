import sequelize from "../config/sequelize.js";
import "../models/index.js";

export const startSequelize = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  console.log(`Available models in Sequelize ${Object.keys(sequelize.models)}`);
};
