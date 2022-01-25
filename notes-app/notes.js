const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note) => note.title !== title)

    if(notes.length !== filteredNotes.length) {
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse('\"' +title+ '\" has been removed!'))
    } else {
        console.log(chalk.red.inverse('\"' +title+ '\" was not found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow('Your notes:\n'))
    notes.forEach((note) => {
        console.log(chalk.yellow(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if(noteToRead){
        console.log(chalk.yellow(title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.inverse('\"' + title + '\" not found!'))
    }
}

//Helper Functions
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}