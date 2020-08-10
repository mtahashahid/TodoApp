var list = document.getElementById("list")

function addTodo() {
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.setAttribute("class", "todo-list")
    li.appendChild(liText)
    list.appendChild(li)
    todo_item.value = "";

    // Delete button 
    var deleteIcon = document.createElement("img");
    deleteIcon.src = "./delete-icon.png";
    deleteIcon.setAttribute("id", "deleteIcon");
    deleteIcon.setAttribute("onClick", "deleteItem(this)")
    li.appendChild(deleteIcon);

    //Edit button

    var editIcon = document.createElement("img");

    editIcon.src = "./edit-icon.png";
    editIcon.setAttribute("id", "editIcon");

    editIcon.setAttribute("onClick", "editItem(this)")

    li.appendChild(editIcon);
    li.appendChild(list)
    li.appendChild(todo_item)
}

function deleteItem(e) {
    e.parentNode.remove();
}

function deleteAll() {
    list.innerHTML = "";
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter text", val)
    e.parentNode.firstChild.nodeValue = editValue;
}