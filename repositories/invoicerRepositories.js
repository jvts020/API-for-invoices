const db = require('API-for-invoices-main/mysql.js');


const notaFiscalRepository = {
  findById: (id, callback) => {
    db.pool.query('SELECT * FROM notasfiscais WHERE NotaFiscalID = ?', [id], callback);
  },
  findAll: (callback) => {
    db.pool.query('SELECT * FROM notasfiscais', callback);
  },
  deleteById: (id, callback) => {
    db.pool.query('DELETE FROM notasfiscais WHERE NotaFiscalID = ?', [id], callback);
  }
};