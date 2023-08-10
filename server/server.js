const express = require('express')
const fs = require('fs').promises;
const app = express()
const port = 3010;
app.use(express.json())

// internal imports
const databaseData = require('./database.json')
const createReportFunc = require('./write_to_docx')


app.post('/api', (req, res) => {
    const damageNr = req.body;
    fs.readFile('database.json', 'utf8')
    .then((data) => {
        return JSON.parse(data)
    })
    .then((data) => {
        if (!data) throw new Error('Error reading file'); // Throw an error to stop the chain
        return data;
    })
    .then((data) => {
        data.push(damageNr)
        return data;
    })
    .then((data) => {
        fs.writeFile('database.json', JSON.stringify(data, null, 2))
        return data;
    })
    .then((data) => {
        console.log('data', data)
        return res.json({ message: 'Damagereport received successfully', data: data })
    })

    .catch((err) => console.log('Error writing file',err));
});

app.post('/api/create_report', (req, res) => {
    console.log('api/create_report called', req.body)
    createReportFunc.generateDocx(databaseData);
    res.json({ message: 'backend executed'})
})


app.listen(port, () => console.log('Server ready on 3010'))