import express from "express";

export const categoriesRoutes = express.Router();

categoriesRoutes.get("/", (req, res) => {
    res.render("categories");
});

export default categoriesRoutes;
