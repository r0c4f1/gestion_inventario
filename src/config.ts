import { loadEnvFile } from 'process'
import path from 'path'
import { fileURLToPath } from 'url';
import i18next from "i18next";
import i18nextFsBackend from "i18next-fs-backend";
import { LanguageDetector, handle } from "i18next-http-middleware";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

i18next
    .use(i18nextFsBackend)
    .use(LanguageDetector) // Detecta el idioma automáticamente
    .init({
        fallbackLng: 'es', // Idioma por defecto
        backend: {
            loadPath: path.join("locales/{{lng}}.json")
        },
        detection: {
            order: ['querystring', 'cookie'], // Busca primero en URL (?lng=en) luego en cookies
            caches: ['cookie']
        }
    });



loadEnvFile('.env');

export const config = {
    port: process.env.PORT || 3000,
    user: process.env.BD_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    bd_port: Number(process.env.BD_PORT),
    __filename,
    __dirname,
    path,
    i18next,
    handle
}
