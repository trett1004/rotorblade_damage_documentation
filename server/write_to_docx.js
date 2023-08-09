const officegen = require('officegen')
const fs = require('fs')

const dataArray = require('./database.json');
console.log('dataArray', dataArray)



// Create an empty Word object:
let docx = officegen('docx')

// Officegen calling this function after finishing to generate the docx document:
docx.on('finalize', function(written) {
  console.log(
    'Finish to create a Microsoft Word document.'
  )
})

// Officegen calling this function to report errors:
docx.on('error', function(err) {
  console.log(err)
})

dataArray.forEach((item) => {
    console.log('item:', item)
    let pObj = docx.createP()
    pObj.addText(`Damage Nr: ${item['damageCard']['damageNr']}`, { bold: true, underline: true })
    pObj.addLineBreak()
    pObj.addText(`Date: ${item['damageCard']['date']}`)
    pObj.addLineBreak()
    pObj.addText(`Windfarm: ${item['damageCard']['windfarm']}`)
    pObj.addLineBreak()
    pObj.addText(`Blade: ${item['damageCard']['blade']}`)
    pObj.addLineBreak()
    pObj.addText(`Z[mm]: ${item['damageCard']['z']}`)
    pObj.addLineBreak()
    pObj.addText(`Profile Depth: ${item['damageCard']['profile_depth']}`)
    pObj.addLineBreak()
    pObj.addText(`Edge: ${item['damageCard']['edge']}`)
    pObj.addLineBreak()
    pObj.addText(`Side: ${item['damageCard']['side']}`)
})


// Let's generate the Word document into a file:

let out = fs.createWriteStream('example.docx')

out.on('error', function(err) {
  console.log(err)
})

// Async call to generate the output file:
docx.generate(out)

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