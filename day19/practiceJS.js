//practice adding entered text to div section when click submit
var todos = [{
    text:'Work from home',
    completed:true
},{
    text:'Learn to code',
    completed:true
},{
    text:'Learn japanese',
    completed:false
},{
    text:'Walk dog',
    completed:false
},{
    text:'Listen to music',
    completed:true
}]

document.querySelector('#form').addEventListener('submit',function(e){
    e.preventDefault();
    var item = e.target.elements.firstInput.value;
    const p = document.createElement('p');
    p.textContent = item;
    console.log(p.textContent);
    document.querySelector('#division').appendChild(p);
})

var clicked = document.querySelector('#test-button').addEventListener('click',function(e){
    todos.forEach(function(todo){
        if(todo.completed){
            console.log(todo.text);
            const item = document.createElement('p');
            item.textContent = todo.text;
            document.querySelector('#division').appendChild(item);
        }
    })
})

