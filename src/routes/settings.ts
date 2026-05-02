import express from "express";

export const settingsRoutes = express.Router();

settingsRoutes.get("/", (req, res) => {
    res.render("settings");
});


export default settingsRoutes;
