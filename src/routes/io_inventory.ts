import express from "express";

export const ioInventoryRoutes = express.Router();

ioInventoryRoutes.get("/", (req, res) => {
    res.render("io_inventory");
});



export default ioInventoryRoutes;
