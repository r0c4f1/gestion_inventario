import express from "express";
import { getBrandsController } from "../controllers/brandsController.ts";

export const marcasRoutes = express.Router();

marcasRoutes.get("/", (req, res) => {
    res.render("brands");
});

marcasRoutes.get("/get-brands", async (req, res) => {
    const { data, error } = await getBrandsController();

    if (error) {
        res.status(500).json({ error });
    }

    res.json({ data });
});

export default marcasRoutes;
