import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Profile = sequelize.define("Profile", {
  address: DataTypes.STRING,
  bio: DataTypes.STRING,
});

export default Profile;
