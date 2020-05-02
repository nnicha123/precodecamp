
//Get saved todos from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}
//Save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Remove todo by id
const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
}
// Check boxes for completed
const checkComplete = function(){
    todos.forEach(function(todo){
        return todo.completed
    })
}

//Generate DOM elements for individual todo
const generateTodoDOM = function (todo) {
    const textEl = document.createElement('span')
    textEl.textContent = todo.text

    // Set up remove button
    const button = document.createElement('button')
    button.textContent = 'x'
    button.addEventListener('click',function(){
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    // Check boxes for the ones that todos are completed
    const checkBoxEl = document.createElement('input')
    checkBoxEl.setAttribute('type', 'checkbox')
    checkBoxEl.checked = todo.completed
    const todoEl = document.createElement('div')

    todoEl.appendChild(checkBoxEl)
    todoEl.appendChild(textEl)
    todoEl.appendChild(button)

    return todoEl
}

//Render todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        // debugger
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))

    })
}

//Generate summary DOM
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    return summary
}