const todolistForm = document.getElementById("todolistForm");
const todoInput = todolistForm.querySelector("#todolistForm input");
const todoList = document.getElementById("todolist");

let todoDB =[]

todolistForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const value = todoInput.value
    todoDB.push(value)
    paint(value)
    localStorage.setItem("todo",JSON.stringify(todoDB));
    todoInput.value = ""
})

function paint(data){
    const li = document.createElement("li")
    li.innerText=data;
    todoList.appendChild(li);
}
const getDB = JSON.parse(localStorage.getItem("todo"))
if(getDB !==null){
    getDB.map(paint)
}
