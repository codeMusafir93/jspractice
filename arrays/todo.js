const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

// Delete the third item 

todos.splice(2, 1)


// Add a new item onto the end

todos.push('Procrastinate')

// Remove the first element from the list

// todos.shift()

console.log(`You have ${todos.length} todos!`)
// console.log(todos)



todos.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`)
})

 //for (count = 0; count < todos.length; count++) {
 //   console.log(`${count + 1}. ${todos[count]}`)
//}





















