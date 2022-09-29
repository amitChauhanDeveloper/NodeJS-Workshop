const mysql = require('mysql2'); // import mysql2 database from npm

// create connection
const databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // user root
    password: 'admin', // password admin
    database: 'cpiDemo',
});

// connect with database
databaseConnection.connect((error) => {
    if(!error){
        console.log('Database connection successfully');
    }else{
        console.log('Database connection failed' + JSON.stringify
        (error));
    }
})

// export module
module.exports = databaseConnection;