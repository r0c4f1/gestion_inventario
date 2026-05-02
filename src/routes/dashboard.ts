import express from "express";

export const dashboardRoutes = express.Router();

dashboardRoutes.get("/", (req, res) => {
    res.render("dashboard");
});


export default dashboardRoutes;