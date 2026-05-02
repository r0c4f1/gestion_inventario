import express from "express";
import { getModelsController, getModelByIdController } from "../controllers/modelsController.ts";
const modelsRoutes = express.Router();

modelsRoutes.get("/", (req, res) => {
    res.render("models");
});

modelsRoutes.get("/get-models", async (req, res) => {
    const { data, error } = await getModelsController();
    if (error) {
        res.status(500).json({ error });
    } else {
        res.json({ data });
    }
});

modelsRoutes.get("/get-model/:id", async (req, res) => {
    const { id } = req.params;
    const { data, error } = await getModelByIdController(id);
    if (error) {
        res.status(500).json({ error });
    } else {
        res.json({ data });
    }
});


export default modelsRoutes;
