import pool from "../connect.ts";

async function getProductsModel() {
    const query = "SELECT * FROM productos";
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function setProductModel(nombre_producto: string, precio: number, cantidad: number, costo: number, codigo: string) {
    const query = `
        INSERT INTO productos (nombre_producto, precio, cantidad, costo, codigo)
        VALUES ($1, $2, $3, $4, $5);
    `;
    const values = [nombre_producto, precio, cantidad, costo, codigo];
    try {
        await pool.query(query, values);
        return { success: true };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { getProductsModel, setProductModel }
