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

//Generate DOM elements for individual todo
const generateTodoDOM = function (todo) {
    const textEl = document.createElement('span')
    textEl.textContent = todo.text
    const button = document.createElement('button')
    button.textContent = 'x'
    const checkBoxEl = document.createElement('input')
    checkBoxEl.setAttribute('type', 'checkbox')
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