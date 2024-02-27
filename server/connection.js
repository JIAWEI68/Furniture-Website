let mysql = require('mysql');
let connection = mysql.createConnection(
    {
        host: '',
        port: '',
        user: '',
        password: '',
        database: ''
    }
);

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
});
module.exports = connection;