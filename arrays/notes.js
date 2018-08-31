const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.pop() // Push method
// notes.push('My new note') // Pop method
// console.log(notes.shift())
// notes.unshift('My first note')
// // console.log(notes.length)

// notes.splice(1, 1, 'This is the new second item')

notes[2] = "This is the new note 3"

notes.forEach(function (index, item) {
    console.log(index)
    console.log(item)
}) 

// console.log(notes)

for (count = 5; count >= 0; count--) {
    if (count === 0) {
        console.log('BOOM!')
    }
    else {
        console.log(count)
    }
}