const docx = require("docx");
import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "docx";
// const dataArray = require('./database.json');

const dataArray = [{damageNr:5},{damageNr:0}]
console.log(dataArray);

const firstName = "John";
const lastName = "Doe";
const age = 30;

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun(`Name: ${firstName} ${lastName}`),
                    ],
                }),
            ],
        },
    ],
});

// Used to export the file into a .docx file
Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});

// Done! A file called 'My Document.docx' will be in your file system.