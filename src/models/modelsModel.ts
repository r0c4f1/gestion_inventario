import pool from "../connect.ts";

async function getModelsModel() {
    const query = "SELECT id_modelo, nombre_modelo FROM modelos";
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function getModelByIdModel(id: string) {
    const query = `SELECT id_modelo AS id, nombre_modelo AS name FROM modelos WHERE id_marca = $1`;
    const values = [id];
    try {
        const result = await pool.query(query, values);
        return result.rows;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export { getModelsModel, getModelByIdModel }
