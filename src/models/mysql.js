if (process.env.NODE_ENV !== "production") require("dotenv").config();
const mysql = require("mysql");

const dataConnection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
};

function mysql_query(sql) {
    const connection = mysql.createConnection(dataConnection);
    const promise = new Promise((resolve, reject) => {
        connection.connect(function (err) {
            if (err) {
                console.log("Error en la Coneccion");
                throw reject(err.stack);
            }
        });
        connection.query(sql, async function (error, results, fields) {
            if (error) {
                console.log("Error en la consulta");
                throw reject(error);
            }
            resolve(results);
        });
        connection.end();
    });
    return promise;
}

module.exports = mysql_query;
