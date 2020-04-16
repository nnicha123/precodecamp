const todos = [{
    text:'Order cat food',
    completed:false
},{
    text:'Clean kitchen',
    completed:true
},{
    text:'Buy food',
    completed:true
},{
    text:'Do work',
    completed:false
},{
    text:'Exercise',
    completed:true
}]

const filters = {
    searchText : '',
    hideCompleted : false
}

const renderTodos = function(todos,filters){
    let filteredTodos = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    // filteredTodos = filteredTodos.filter(function(todo){
    //     if(filters.hideCompleted){
    //         return !todo.completed
    //     }else{
    //         return true;
    //     }
    // })

}

const incompleteTodos = filteredTodos.filter(function(todo){
    return !todo.completed;
})


const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function(todo){
    if(!todo.completed){
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('body').appendChild(p);
    }

})
// document.querySelector('button').addEventListener('click',function(e){
//     e.target.textContent = "Text change on button"
// })
document.querySelector('#todo-form').addEventListener('submit',function(e){
    e.preventDefault();
    const item = e.target.elements.inputSearch.value;
    const p = document.createElement('p');
    p.textContent = item;
    document.querySelector('#todos').appendChild(p);
    e.target.elements.inputSearch.value = '';
})

document.querySelector('#remove-all').addEventListener('click',function(e){
    document.querySelector('#todos').innerHTML = '';
})

document.querySelector('#hide-completed').addEventListener('change',function(e){
    filters.hideCompleted = e.target.checked;
    renderTodos(todos,filters)
})