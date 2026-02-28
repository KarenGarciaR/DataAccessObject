const conexion = require('../database/conexion');
const Usuario = require('../models/Usuario');

class UsuarioDAO {

    agregar(nombre, correo) {
        const sql = "INSERT INTO usuarios (nombre, correo) VALUES (?, ?)";
        conexion.query(sql, [nombre, correo], (err, result) => {
            if (err) {
                console.error("Error al insertar:", err);
            } else {
                console.log("Usuario agregado con ID:", result.insertId);
            }
        });
    }

    obtenerTodos() {
        const sql = "SELECT * FROM usuarios";
        conexion.query(sql, (err, results) => {
            if (err) {
                console.error("Error al obtener usuarios:", err);
            } else {
                const usuarios = results.map(
                    row => new Usuario(row.id, row.nombre, row.correo)
                );
                console.log("Usuarios:", usuarios);
            }
        });
    }

    eliminar(id) {
        const sql = "DELETE FROM usuarios WHERE id = ?";
        conexion.query(sql, [id], (err) => {
            if (err) {
                console.error("Error al eliminar:", err);
            } else {
                console.log("Usuario eliminado");
            }
        });
    }
}

module.exports = UsuarioDAO;