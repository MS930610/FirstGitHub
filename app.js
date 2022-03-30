const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
function handleBtnClick(){
    console.log(loginInput.value)
}
const HIDDEN_CLASSNAME = "hidden";
const SAVEDATAKEY = "value";
const h1 = document.getElementById("h1");
function onSumbit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const value = loginInput.value;
    localStorage.setItem(SAVEDATAKEY,value);
    greeting(value)
}
const saved = localStorage.getItem(SAVEDATAKEY);
const button1 = document.getElementById("login");
const button2 = document.getElementById("logout");

function greeting(saved){
    h1.innerText="hello "+saved;
    h1.classList.remove(HIDDEN_CLASSNAME);
    button2.classList.remove(HIDDEN_CLASSNAME);
}

if(saved===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    button1.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onSumbit)
}else{
    greeting(saved)
}


function delId(){
    // localStorage.removeItem(SAVEDATAKEY)
    h1.innerText="";
    button1.classList.add(HIDDEN_CLASSNAME);
}
button2.addEventListener("click",delId)