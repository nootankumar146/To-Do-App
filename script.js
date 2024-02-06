function addTask() {
    let todoInput = document.getElementById('todoInput');
    let todoText = todoInput.value;
    if (todoText === '') {
        alert("Please enter a valid task!");
        return;
    }
    let todoList = document.getElementById('todoList');

    let li = document.createElement('li');
    li.classList.add('todo-item');

    let span = document.createElement('span');
    span.textContent = todoText;

    // delete button
    let deletebtn = document.createElement('i');
    deletebtn.setAttribute('class', 'fa-solid fa-trash');
    deletebtn.onclick = function () {
        li.remove();
    };

    // edit btn
    let editbtn = document.createElement('i');
    editbtn.setAttribute('class', 'fa-solid fa-pen-to-square edit-btn');
    editbtn.onclick = function () {
        let editPrompt = prompt("Please enter the updated text", span.textContent);
        span.textContent = editPrompt;
    };

    li.appendChild(span);
    li.appendChild(deletebtn);
    li.appendChild(editbtn);
    todoList.appendChild(li);

    todoInput.value = '';
}
