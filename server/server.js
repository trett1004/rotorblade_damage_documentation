const express = require('express')
const fs = require('fs').promises;
const app = express()
const port = 3010;
app.use(express.json())

app.post('/api', (req, res) => {
    const damageNr = req.body;
    console.log('req', req.body)
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
        return res.json({ message: 'Damage received successfully', data: data })
    })

    .catch((err) => console.log('Error writing file',err));
});


app.listen(port, () => console.log('Server ready on 3010'))