# DataAccessObject

-----Descripción General---

El presente proyecto implementa el patrón de diseño DAO (Data Access Object) con el objetivo de separar la lógica de acceso a datos de la lógica principal de la aplicación.El patrón DAO permite encapsular todas las operaciones relacionadas con la base de datos dentro de una clase específica, evitando que la aplicación interactúe directamente con consultas SQL. Esto mejora la organización, mantenibilidad y escalabilidad del sistema.

En este proyecto se utiliza Node.js y MySQL como base de datos relacional.

----Arquitectura del Proyecto---

La estructura del proyecto se organiza de la siguiente manera:

DataAccessObject/
│
├── app.js
├── package.json
│
├── models/
│   └── Usuario.js
│
├── dao/
│   └── UsuarioDAO.js
│
└── database/
    └── conexion.js
    
---Descripción de Componentes---

**models/Usuario.js (Entidad)**
Representa el modelo de datos correspondiente a la tabla usuarios en la base de datos.

Responsabilidad:

Definir la estructura del objeto Usuario.
Representar los atributos: id, nombre y correo.
Se utiliza un constructor para inicializar las propiedades del objeto.

***database/conexion.js (Conexión a la Base de Datos)**
Este archivo centraliza la configuración y conexión a MySQL.

Responsabilidad:

Establecer conexión con la base de datos.
Exportar la conexión para ser utilizada por los DAO.
Evitar duplicación de configuración en múltiples archivos.
Separar la conexión permite mayor organización y reutilización del código.

**dao/UsuarioDAO.js (Data Access Object)**
Este archivo implementa el patrón DAO.

Responsabilidad:

Contener todas las operaciones CRUD:
agregar()
obtenerTodos()
eliminar()
Ejecutar consultas SQL.
Convertir los resultados en objetos del modelo Usuario.
Actuar como intermediario entre la aplicación y la base de datos.

La aplicación principal no contiene consultas SQL, ya que estas se encuentran encapsuladas en esta clase.

**app.js (Aplicación Principal)**

Responsabilidad:

Instanciar el DAO.
Invocar los métodos del DAO.
No contiene lógica SQL.
No interactúa directamente con la base de datos.
Esto demuestra la correcta aplicación del patrón DAO.

-----Diagrama UML de Clases---

+-------------------+
|      Usuario      |
+-------------------+
| - id              |
| - nombre          |
| - correo          |
+-------------------+
| + constructor()   |
+-------------------+

          ▲
          |
          |
+-------------------+
|    UsuarioDAO     |
+-------------------+
| - conexion        |
+-------------------+
| + agregar()       |
| + obtenerTodos()  |
| + eliminar()      |
+-------------------+

          ▲
          |
          |
+-------------------+
|     app.js        |
+-------------------+
| + main()          |
+-------------------+


----Flujo del sistema:---

app.js → UsuarioDAO → conexion.js → MySQL

---Ejemplo de comentario en el DAO:

// Inserta un nuevo usuario en la base de datos
agregar(nombre, correo) {
    const sql = "INSERT INTO usuarios (nombre, correo) VALUES (?, ?)";
    ...
}
-----Instrucciones de Implementación----

1.Instalar Node.js.

2.Crear la base de datos en MySQL:

CREATE DATABASE mi_base;
USE mi_base;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100)
);

3.Inicializar el proyecto:

npm init -y
npm install mysql2

4.Configurar los datos de conexión en database/conexion.js.

5.Ejecutar la aplicación:

node app.js


----Instrucciones de Uso---

Ejecutar el archivo app.js.
El sistema agregará registros en la base de datos.
Se mostrarán los usuarios almacenados.
Los datos permanecerán guardados en MySQL.
