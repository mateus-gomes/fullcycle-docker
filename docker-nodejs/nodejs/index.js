const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

app.get("/:name", (req, res) => {
    const sql = `INSERT INTO people(name) VALUES('${req.params.name}')`;
    connection.query(sql);

    returnNames(res)
})

app.listen(port, () => {
    console.log('Rodando na porta ', port);
})

function returnNames(res){
    connection.query("SELECT name FROM people", (err, result) => {
        if (err) throw err;
        let body = '<h1>Full Cycle Rocks!</h1>';

        for(let i = 0; i < result.length; i++) {
            body += `\n${result[i].name}`;
        }

        res.send(body);
    });
}