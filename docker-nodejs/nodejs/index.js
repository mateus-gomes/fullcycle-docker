const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get("/:name", (req, res) => {
    const sql = `INSERT INTO people(name) VALUES('${req.params.name}')`
    connection.query(sql)

    connection.query("SELECT name FROM people", function (err, result) {
        if (err) throw err;

        let namesList = ''
        for(let i = 0; i < result.length; i++) {
            namesList += `\n${result[i].name}`
        }

        res.send(`<h1>Full Cycle Rocks!</h1>${namesList}`)
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ', port);
})