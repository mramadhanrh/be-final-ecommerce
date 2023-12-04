import Categories from "./categories.js";
import ProductsCategories from "./productCategories.js";
import Products from "./products.js";
import Users from "./users.js";

Users.hasMany(Products);
Products.belongsTo(Users);

Products.belongsToMany(Categories, {
  through: ProductsCategories,
  foreignKey: "productId",
});
Categories.belongsToMany(Products, {
  through: ProductsCategories,
  foreignKey: "categoryId",
});
