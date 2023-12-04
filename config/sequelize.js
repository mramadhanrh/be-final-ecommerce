import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
console.log(process.env.MYSQL_URL);

const sequelize = new Sequelize(process.env.MYSQL_URL);

export default sequelize;
