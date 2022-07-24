const fs = require('fs')
const chalk = require('chalk')
const getNotes = (n) => {
    return n
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.greenBright.inverse(`${tilte} -> added success`))
    } else {
        console.log(chalk.redBright.inverse(`${title} - exists already`))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
    
}
const removeNotes = (title) => {
    const notes = loadNotes()
    const notesKept = notes.filter(note => note.title !== title)

    if (notes.length > notesKept.length) {
        console.log(chalk.greenBright.inverse('Note Removed'))
        saveNotes(notesKept)
    } else {
        console.log(chalk.redBright.inverse("No note found"))
    }

}

module.exports = {
    getNotes,
    addNote,
    removeNotes,
}