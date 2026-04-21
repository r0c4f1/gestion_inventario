import express from "express";
import { config } from "./config.ts";

const app = express();
const { path, __dirname, port, __filename } = config;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join("public")));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});