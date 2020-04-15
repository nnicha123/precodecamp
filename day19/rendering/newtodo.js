const todos = [{
    text:'Order cat food',
    completed:false
},{
    text:'Clean kitchen',
    completed:true
},{
    text:'Do work',
    completed:false
},{
    text:'Exercise',
    completed:true
}]

const filters = {
    searchText:''
}

const renderTodos = function(todo,filters){
    const filteredTodos = todo.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    filteredTodos.forEach(function(todo){
        const item = document.createElement('p');
        item.textContent = todo.text;
        document.querySelector('#todo-items').appendChild(item);
    })
}

renderTodos(todos,filters);

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value;
    renderTodos(todos,filters);
})

document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e.target.elements.todo.value);
    e.target.elements.todo.value = '';
})