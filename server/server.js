const express = require('express')
const fs = require('fs').promises;
const path = require("path");
const cors = require("cors");
const base64Img = require("base64-img");
const bodyParser = require("body-parser");


const app = express()
const port = 3010;
app.use(express.json())

// Cors = Cross-origin resource sharing
const allowedOrigin = "http://localhost:3000";
app.use(cors({
  origin: allowedOrigin
}));
app.use(bodyParser.json({ limit: "50mb" }));

// internal imports
const databaseData = require('./database.json')
const createReportFunc = require('./write_to_docx')

// Store the filename from route "app.post("/api/upload" in a higher scope
let fileName = '';

// Save the damagecard from frontend to database.json
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

// Camera making screnshot
app.post("/api/upload", (req, res) => {
    console.log('Image received:', req.body);
    const { image } = req.body;
    base64Img.img(image, './images', Date.now(), function(err, filepath) {
        const pathArr = filepath.split('/');
        fileName = pathArr[pathArr.length - 1];

        res.status(200).json({ message: "Image saved successfully: ", fileName: fileName });
  });
});

app.get("/api/upload", (req, res) => {
    res.send({message: "test from app get api upload", fileName: fileName})
});

// create the docx document
app.post('/api/create_report', (req, res) => {
    console.log('api/create_report called', req.body)
    createReportFunc.generateDocx(databaseData);
    res.json({ message: 'backend executed'})
})


app.listen(port, () => console.log(`Server ready on ${port}`))