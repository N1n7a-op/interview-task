let mysql = require('mysql2');

let pool  = mysql.createPool({
   
   
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'task',
    connectionLimit : 3,
    waitForConnections: true,
    dateStrings     : true

});



pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }   
    if (connection) 
    	connection.release()    
    return;
})


module.exports = pool;