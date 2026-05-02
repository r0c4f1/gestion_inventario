import pool from "../connect.ts";

async function getBrandsModel() {
    const query = "SELECT id_marca AS id, nombre_marca AS name FROM marcas";
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export { getBrandsModel }