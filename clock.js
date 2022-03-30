
const Time = document.querySelector("#Time")
function Times(){
    const T = new Date();
    const H = String(T.getHours()).padStart(2,"0");
    const M = String(T.getMinutes()).padStart(2,"0");
    const S = String(T.getSeconds()).padStart(2,"0");
    Time.innerText=`${H}:${M}:${S}`;
}
setInterval(Times,1000)