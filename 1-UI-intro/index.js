
console.log("-index.js-");


//-----------------------------------------
// using DOM API
//-----------------------------------------

let box = document.querySelector(".alert");
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')
let nextBtn = document.querySelector('.btn-success')

nextBtn.addEventListener('click', e => {
    box.innerHTML = "lean react.js"
})


hideBtn.addEventListener('click', e => {
    box.style.display = 'none';
})

showBtn.addEventListener('click', e => {
    box.style.display = '';
})


//-----------------------------------------
// using DOM API  + XHR or Fetch api
//-----------------------------------------


let todosBtn = document.getElementById("todos-btn");
todosBtn.addEventListener('click', e => {
    let url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    let promise = fetch(url)
    promise
        .then(response => response.json())
        .then(todos => {
            let elements = todos.map((todo, idx) => {
                return `
                    <li class="list-group-item ${todo.completed ? 'bg-warning' : ''}">
                        <span class="badge badge-dark">${todo.id}</span>
                        <span>${todo.title}</span>
                        <span class="text text-danger">${todo.completed}</span>
                    </li>
                `
            })
            document.getElementById("todos").innerHTML = elements.join(" ")
        })
})


//-----------------------------------------
// using DOM API  + timer API api
//-----------------------------------------


setInterval(() => {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
}, 1000)