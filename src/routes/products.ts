import express from "express";
import { getProductsController, setProductController } from "../controllers/productsController.ts";

export const productsRoutes = express.Router();

productsRoutes.get("/get-products", async (req, res) => {
    const { data, error } = await getProductsController();
    if (error) {
        res.status(500).json({ error });
    } else {
        res.json({ data });
    }
});

productsRoutes.post("/set_product", async (req, res) => {
    const { success, error } = await setProductController(req.body);
    if (error) {
        res.status(500).json({ success: false, error });
    } else {
        res.status(201).json({ success: true });
    }
});

productsRoutes.get("/{:id}", (req, res) => {
    res.render("products");
});


export default productsRoutes;
