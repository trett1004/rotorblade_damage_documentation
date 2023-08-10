// External imports
const officegen = require('officegen')
const fs = require('fs')

// Internal imports
const dataArray = require('./database.json');
console.log('dataArray', dataArray)

// Create an empty Word object:
let docx = officegen('docx')

// Function for generating the docx document:
const generateDocx = (data) => {
  // Officegen calling this function after finishing to generate the docx document:
  docx.on('finalize', function (written) {
    console.log(
      'Finish to create a Microsoft Word document.'
    )
  })

  // Officegen calling this function to report errors:
  docx.on('error', function (err) {
    console.log(err)
  })

  dataArray.forEach((item) => {
    console.log('item:', item)
    let pObj = docx.createP()
    pObj.addText(`Damage Nr: ${item['updatedDamageCardWithPhoto']['damageNr']}`, { bold: true, underline: true })
    pObj.addLineBreak()
    pObj.addText(`Date: ${item['updatedDamageCardWithPhoto']['date']}`)
    pObj.addLineBreak()
    pObj.addText(`Windfarm: ${item['updatedDamageCardWithPhoto']['windfarm']}`)
    pObj.addLineBreak()
    pObj.addText(`Blade: ${item['updatedDamageCardWithPhoto']['blade']}`)
    pObj.addLineBreak()
    pObj.addText(`Z[mm]: ${item['updatedDamageCardWithPhoto']['z']}`)
    pObj.addLineBreak()
    pObj.addText(`Profile Depth: ${item['updatedDamageCardWithPhoto']['profile_depth']}`)
    pObj.addLineBreak()
    pObj.addText(`Edge: ${item['updatedDamageCardWithPhoto']['edge']}`)
    pObj.addLineBreak()
    pObj.addText(`Side: ${item['updatedDamageCardWithPhoto']['side']}`)
    pObj.addLineBreak()
    pObj.addText(`Photo: ${item['updatedDamageCardWithPhoto']['photo']}`)
    pObj.addLineBreak()
    // We can even add images:
    pObj.addImage(`./images/${item['updatedDamageCardWithPhoto']['photo']}`)
  })

  // generate the Word document into a file:
  let out = fs.createWriteStream('report.docx')

  out.on('error', function (err) {
    console.log(err)
  })

  // Async call to generate the output file:
  docx.generate(out)
}

// generateDocx(dataArray);

module.exports = {generateDocx};
// pObj.addText('Simple')
// pObj.addText(' with color', { color: '000088' })
// pObj.addText(' and back color.', { color: '00ffff', back: '000088' })

// pObj = docx.createP()

// pObj.addText('Bold + underline', { bold: true, underline: true })


// pObj = docx.createP()

// pObj.addText('Those two lines are in the same paragraph,')
// pObj.addLineBreak()
// pObj.addText('but they are separated by a line break.')



// docx.putPageBreak()

// pObj = docx.createP()

// We can even add images:
// pObj.addImage('some-image.png')