let mysql = require('mysql');
let connection = mysql.createConnection(
    {
        host: 'furnitureservices.cp40yoio6zpn.ap-southeast-1.rds.amazonaws.com',
        port: '3306',
        user: 'admin',
        password: 'Password!234',
        database: 'Foundation'
    }
);

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to DB');
});
module.exports = connection;