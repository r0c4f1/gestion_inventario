import express from "express";

export const inventoryRoutes = express.Router();

inventoryRoutes.get("/", (req, res) => {
    res.render("inventory");
});

export default inventoryRoutes;
