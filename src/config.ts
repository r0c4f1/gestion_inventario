import { loadEnvFile } from 'process'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

loadEnvFile('.env');

export const config = {
    port: process.env.PORT || 3000,
    __filename,
    __dirname,
    path
}
