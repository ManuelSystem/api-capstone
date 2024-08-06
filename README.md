Proyecto Capstone Node.js - Sistema de Gestión de Eventos

###################################
Descripción del Proyecto
Este proyecto es una aplicación web diseñada para facilitar la organización y gestión de eventos. Los usuarios pueden crear eventos, registrarse como asistentes, gestionar listas de participantes y recibir notificaciones relacionadas con los eventos. El sistema admite varios tipos de eventos, como conferencias, talleres y reuniones, y ofrece una interfaz intuitiva tanto para organizadores como para asistentes.

###################################
Objetivos del Proyecto
- Desarrollar una aplicación web completa utilizando Node.js y Express.js.
- Implementar una arquitectura basada en el patrón MVC.
- Utilizar MongoDB y Mongoose para la gestión eficiente de datos.
- Asegurar la autenticación y autorización de usuarios mediante JWT.
- Diseñar y consumir APIs RESTful.
- Integrar servicios de notificaciones por correo electrónico.
- Refactorizar y optimizar el código para mejorar el rendimiento y la mantenibilidad.

###################################
Tecnologías Utilizadas
- Backend: Node.js, Express.js
- Base de Datos: MongoDB, Mongoose
- Autenticación: JWT (JSON Web Tokens)
- Notificaciones: Integración de servicios de correo electrónico

###################################
Funcionalidades Principales
- Registro y Autenticación de Usuarios: Registro de usuarios y autenticación utilizando JWT.
- Gestión de Eventos: Creación, edición, eliminación y visualización de eventos. Gestión de listas de asistentes.
- Panel de Usuario: Interfaz para que los usuarios gestionen sus eventos y vean los detalles.
- Gestión de Roles: Diferenciación entre usuarios regulares y administradores con permisos específicos.
- Notificaciones: Envío de correos electrónicos para confirmaciones de registro, recordatorios y actualizaciones de eventos.

######################################
Instalación y Configuración

1. Clonar el repositorio:
git clone https://github.com/tu_usuario/proyecto-capstone-nodejs.git
cd api-capstone

2. Instalar dependencias:
npm install

3. Configurar variables de entorno:
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

APP_PORT=3000
MONGODB_URI=<tu_mongodb_uri>
JWT_SECRET=<tu_jwt_secret>
EMAIL_USER=<usuario_email>
EMAIL_PASS=<contraseña_email>

4. Iniciar el servidor:
npm run dev

######################################
Endpoints de la API
La API está estructurada en diferentes grupos de endpoints para facilitar su uso:

- Users: Gestión de usuarios (crear, editar, eliminar, listar).
- Auth: Registro y autenticación de usuarios (login).
- Events: Gestión de eventos (crear, editar, eliminar, listar).
- Notifications: Envío de notificaciones relacionadas con eventos.
- Registration: Registro y cancelación de usuarios en eventos.

######################################
Desafíos y Soluciones
- Autenticación y Autorización: Implementación de JWT para gestionar la autenticación y autorización de usuarios.
- Optimización de Consultas a la Base de Datos: Uso de Mongoose y optimización de las consultas para asegurar la integridad y rendimiento.
- Notificaciones: Integración de un servicio de correo electrónico para gestionar el envío de notificaciones automáticas.

######################################
Este proyecto está licenciado bajo la MIT License. 
