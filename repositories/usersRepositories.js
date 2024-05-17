const db = require('API-for-invoices-main/mysql.js');

const usuarioRepository = {
    findByEmail: (email, callback) => {
      db.pool.query('SELECT * FROM usuarios WHERE Email = ?', [email], callback);
    }
  };