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
function ss(){
    console.log("a run..")
    return new Promise((res,rej)=>{
        setTimeout(()=>{res("sucess")},2000);
    })
}
function sb(text){
    console.log("b run..")
    setTimeout(()=>{console.log("받은 값"+text)},5000);
}
ss().then((value)=>{
    sb(value)
})

function promise(){
    console.log("프로미스 Run....")
    return new Promise((res,rej)=>{
        setTimeout(()=>{res(10)},10000)
    })
}

async function foo(){
    console.log("foo run..")
    const num = await promise()
    console.log(num)
}
foo()
