Gestión de Reservas de Hotel (Examen-Final Programación 2

Este proyecto es una aplicación web diseñada para gestionar las reservas de un hotel. Permite registrar, listar, actualizar y eliminar reservas. Además, incluye validaciones avanzadas y una interfaz moderna, intuitiva y responsiva.

Repositorio oficial: https://github.com/pokerlan24/examen_final

Tabla de Contenidos
Características
Tecnologías Usadas
Requisitos Previos
Instalación
Configuración del Backend
Configuración del Frontend
Base de Datos
Uso
Estructura del Proyecto
Funciones Implementadas
Validaciones
Capturas de Pantalla
Contribuciones
Licencia
Características
Registro de Reservas: Permite registrar una reserva con el nombre del cliente, fechas de inicio y fin, y tipo de habitación.
Actualización de Reservas: Se pueden modificar las fechas de las reservas directamente desde la tabla.
Listado de Reservas: Una tabla dinámica muestra todas las reservas realizadas.
Eliminación de Reservas: Posibilidad de eliminar reservas con un clic.
Validaciones:
No se permiten fechas inconsistentes (fecha inicio > fecha fin).
No se permite reservar en fechas pasadas.
Interfaz Responsiva: Adaptada para dispositivos móviles y de escritorio.
Tecnologías Usadas
Frontend
React.js
Bootstrap
React-DatePicker
Axios
date-fns
Backend
Spring Boot
Spring Data JPA
MySQL
Java 17
Requisitos Previos
Software Necesario
Node.js (v16 o superior)
MySQL Server
Maven (para el backend)
Java 17
Instalación
1. Clona el repositorio
bash
Copy code
git clone https://github.com/pokerlan24/examen_final.git
cd examen_final
2. Configuración del Backend
Sigue los pasos en Configuración del Backend.

3. Configuración del Frontend
Sigue los pasos en Configuración del Frontend.

Configuración del Backend
1. Configura la Base de Datos
La aplicación utiliza MySQL para almacenar las reservas. Crea la base de datos y la tabla necesarias:

sql
Copy code
-- Crear la base de datos
CREATE DATABASE hotel_reservas;

-- Seleccionar la base de datos
USE hotel_reservas;

-- Crear la tabla de reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(255) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    tipo_habitacion VARCHAR(50) NOT NULL
);

-- Opcional: Insertar datos de prueba
INSERT INTO reservas (nombre_cliente, fecha_inicio, fecha_fin, tipo_habitacion)
VALUES 
('Juan Pérez', '2024-01-01', '2024-01-05', 'Sencilla'),
('Ana García', '2024-02-10', '2024-02-15', 'Doble'),
('Carlos Ruiz', '2024-03-20', '2024-03-25', 'Suite');
2. Configura el archivo application.properties
Ubicado en src/main/resources/application.properties:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/hotel_reservas
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
spring.jpa.hibernate.ddl-auto=update
3. Ejecuta el Backend
bash
Copy code
mvn spring-boot:run
El backend estará disponible en http://localhost:8080.

Configuración del Frontend
1. Ve a la carpeta del frontend
bash
Copy code
cd hotel-reservas-frontend
2. Instala las dependencias
bash
Copy code
npm install
3. Configura la URL del Backend
En el archivo src/services/api.js:

javascript
Copy code
const API_URL = "http://localhost:8080/api/reservas";
4. Ejecuta el Frontend
bash
Copy code
npm start
La aplicación estará disponible en http://localhost:3000.

Base de Datos
La estructura de la base de datos es la siguiente:

Tabla: reservas
Campo	Tipo	Restricciones
id	INT	PRIMARY KEY, AUTO_INCREMENT
nombre_cliente	VARCHAR(255)	NOT NULL
fecha_inicio	DATE	NOT NULL
fecha_fin	DATE	NOT NULL
tipo_habitacion	VARCHAR(50)	NOT NULL
Uso
Registro de Reservas:

Completa el formulario con el nombre del cliente, fechas de inicio y fin, y selecciona el tipo de habitación.
Haz clic en "Registrar".
Listado de Reservas:

Todas las reservas registradas aparecerán en una tabla.
Actualizar Reservas:

Haz clic en "Actualizar" para editar las fechas de una reserva.
Selecciona las nuevas fechas y haz clic en "Guardar".
Eliminar Reservas:

Haz clic en "Eliminar" para borrar una reserva.
Estructura del Proyecto
Frontend
css
Copy code
hotel-reservas-frontend
├── src
│   ├── components
│   │   ├── FormularioReserva.jsx
│   │   ├── TablaReservas.jsx
│   ├── services
│   │   └── api.js
│   ├── App.js
│   └── index.js
Backend
css
Copy code
hotel-reservas-backend
├── src
│   ├── main
│   │   ├── java/com/hotelreservas
│   │   │   ├── controller/ReservaController.java
│   │   │   ├── model/Reserva.java
│   │   │   ├── repository/ReservaRepository.java
│   │   │   ├── service/ReservaService.java
│   │   └── resources
│   │       └── application.properties
Funciones Implementadas
Frontend:

React.js con Bootstrap para diseño responsivo.
Validaciones de fechas con React-DatePicker y date-fns.
Manejo de estado con useState y useEffect.
Backend:

API REST con operaciones CRUD.
Validación de datos en el backend con Spring Boot.
Gestión de la base de datos con MySQL y JPA.
Validaciones
Registro de Reservas:

La fecha de inicio no puede ser mayor o igual a la fecha de fin.
No se permiten fechas pasadas.
Actualización de Reservas:

Validaciones similares al registro.
Capturas de Pantalla
Formulario de Registro:
Tabla de Reservas:

