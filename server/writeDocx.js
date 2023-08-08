"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var docx = require("docx");
var fs = require("fs");
var docx_1 = require("docx");
// const dataArray = require('./database.json');
var dataArray = [{ damageNr: 5 }, { damageNr: 0 }];
console.log(dataArray);
var firstName = "John";
var lastName = "Doe";
var age = 30;
// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
var doc = new docx_1.Document({
    sections: [
        {
            properties: {},
            children: [
                new docx_1.Paragraph({
                    children: [
                        new docx_1.TextRun("Name: ".concat(firstName, " ").concat(lastName)),
                    ],
                }),
            ],
        },
    ],
});
// Used to export the file into a .docx file
docx_1.Packer.toBuffer(doc).then(function (buffer) {
    fs.writeFileSync("My Document.docx", buffer);
});
// Done! A file called 'My Document.docx' will be in your file system.
