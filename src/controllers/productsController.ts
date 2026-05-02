import { getProductsModel, setProductModel } from "../models/productsModel.ts";
import { sqlInjection } from "../utils/helpers.ts";

async function getProductsController() {
    try {
        const products = await getProductsModel();
        return { data: products };
    } catch (error) {
        return { error };
    }
}

async function setProductController(productData: any) {
    try {
        const nombre_producto = sqlInjection(productData.nombre_producto);
        const precio = productData.precio;
        const cantidad = productData.cantidad;
        const costo = productData.costo;
        const codigo = sqlInjection(productData.codigo);

        await setProductModel(nombre_producto, precio, cantidad, costo, codigo);
        return { success: true };
    } catch (error) {
        return { error: "Error al guardar el producto", details: error };
    }
}

export { getProductsController, setProductController }
