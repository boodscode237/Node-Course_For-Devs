const fs = require('fs')
const book = {
    title: "What is life",
    author: "Aba and Preach"
}

// convert dictionaries to json
const bookJson = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJson)


// convert json to dictionary
const bookParsed = JSON.parse(bookJson)
console.log(bookParsed.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "ABA"
data.age = 29
data.planet = "Mars"

const userData = JSON.stringify(data)
fs.writeFileSync('1-json.json', userData)