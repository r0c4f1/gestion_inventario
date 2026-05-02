import { Pool } from "pg";
import { config } from "./config.ts"


const { user, host, database, password, bd_port: port } = config;

const pool = new Pool({
    user,
    host,
    database,
    password,
    port,
});

pool.connect()
    .then(() => {
        console.log("✅ Conectado a la base de datos");
    })
    .catch((err) => {
        console.error("❌ Error al conectar a la base de datos:", err);
    });



export default pool;