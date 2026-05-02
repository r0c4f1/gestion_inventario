# Sistema de Gestión de Inventario

Un sistema completo de gestión de inventarios desarrollado con arquitectura **MVC** (Modelo-Vista-Controlador). Permite administrar productos, categorías, modelos, marcas y gestionar los movimientos de entrada y salida de stock. El sistema incluye soporte multi-idioma (Español e Inglés) y una interfaz de usuario moderna impulsada por Tailwind CSS.

## 🚀 Características Principales

- **Arquitectura MVC:** Separación clara entre Rutas, Controladores, Modelos y Vistas.
- **Internacionalización (i18n):** Interfaz disponible en Inglés y Español.
- **Diseño Moderno y Responsivo:** Construido con Tailwind CSS v4 y EJS.
- **Gestión Completa:** CRUD de Productos, Categorías, Marcas y Modelos.
- **Control de Stock:** Entradas y salidas de inventario.
- **Base de Datos:** PostgreSQL para persistencia de datos.

---

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js, Express.js (v5), TypeScript.
- **Base de Datos:** PostgreSQL (`pg`).
- **Frontend:** EJS (Motor de plantillas), Tailwind CSS v4.
- **Librerías Adicionales:** `i18next` (idiomas), `cors`, `nodemon`.

---

## ⚙️ Requisitos Previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada 20+ o superior)
- [PostgreSQL](https://www.postgresql.org/) (Tener un servidor corriendo y credenciales válidas)

---

## 📦 Instalación y Configuración

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/gestion_inventario.git
   cd gestion_inventario
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configuración de Variables de Entorno:**
   Crea un archivo llamado `.env` en la raíz del proyecto y agrega las siguientes variables (completa con las credenciales de tu base de datos y preferencias):
   ```env
   PORT=
   BD_USER=
   HOST=
   DATABASE=
   PASSWORD=
   BD_PORT=
   ```

4. **Configuración de la Base de Datos:**
   - Asegúrate de tener tu base de datos creada en PostgreSQL.
   - El sistema utilizará las variables del archivo `.env` (leídas en `src/config.ts` y conectadas en `src/connect.ts`) para realizar la conexión.

---

## 🖥️ Ejecución del Proyecto

### Entorno de Desarrollo

Para ejecutar el proyecto en modo desarrollo, necesitas dos terminales.

1. **Terminal 1 - Compilar CSS:**  
   Este comando escuchará y compilará los cambios de Tailwind CSS en tiempo real:
   ```bash
   npm run css:watch
   ```

2. **Terminal 2 - Iniciar Servidor:**  
   Este comando arrancará el servidor usando `nodemon` y `ts-node` para recargas automáticas:
   ```bash
   npm run dev
   ```

Una vez que ambos procesos estén corriendo, abre tu navegador e ingresa a `http://localhost:3000` (o el puerto configurado).

### Entorno de Producción

Si deseas generar una versión lista para producción:

1. Compilar los estilos CSS minificados:
   ```bash
   npm run css:build
   ```

2. Transpilar TypeScript a JavaScript y copiar las vistas a `dist`:
   ```bash
   npm run build
   ```

3. Iniciar la aplicación:
   ```bash
   npm start
   ```

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
