const UsuarioDAO = require('./dao/UsuarioDAO');

const usuarioDAO = new UsuarioDAO();

// Agregar usuarios
usuarioDAO.agregar("Karen", "karen@email.com");
usuarioDAO.agregar("Luis", "luis@email.com");

// Esperamos un poco para que se inserten antes de consultar
setTimeout(() => {
    usuarioDAO.obtenerTodos();
}, 1000);