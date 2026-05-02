import express from "express";
import cors from "cors";
import { config } from "./config.ts";
import dashboardRoutes from "./routes/dashboard.ts";
import inventoryRoutes from "./routes/inventory.ts";
import productsRoutes from "./routes/products.ts";
import categoriesRoutes from "./routes/categories.ts";
import modelsRoutes from "./routes/models.ts";
import brandsRoutes from "./routes/brands.ts";
import settingsRoutes from "./routes/settings.ts";
import ioInventoryRoutes from "./routes/io_inventory.ts";

const app = express();
const { path, __dirname, port, handle, i18next } = config;


// middleware generales
app.use(handle(i18next)); // middleware de i18next (para cambiar el idioma)


// agregar cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join("public")));


// rutas 

app.get("/", (req, res) => {
    res.render("index");
});

app.get('/change-lang/:lang', (req, res) => {
    const { lang } = req.params;
    const supportedLangs = ['es', 'en'];

    if (supportedLangs.includes(lang)) {
        res.cookie('i18next', lang, {
            maxAge: 180000000,
            httpOnly: false,
            path: '/'
        });
    }

    res.json({ success: true });
});

app.use("/products", productsRoutes);

app.use("/dashboard", dashboardRoutes);

app.use("/inventory", inventoryRoutes);

app.use("/ioinventory", ioInventoryRoutes);

app.use("/categories", categoriesRoutes);

app.use("/models", modelsRoutes);

app.use("/brands", brandsRoutes);

app.use("/settings", settingsRoutes);


app.use((req, res, next) => {
    res.status(404).render("404");
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).redirect("/dashboard");
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});