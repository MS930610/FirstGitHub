const geolo = navigator.geolocation.getCurrentPosition(onGeo,onGeoErr);
const MY_WETEHER_KEY = "7dc7576b96fd893f52e7e5bf7f883448";
const wName = document.getElementById("wName")
const wTemp = document.getElementById("wTemp")
const weather = document.getElementById("weather")
function onGeo(position){
    const 경도=position.coords.latitude;
    const 위도=position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${경도}&lon=${위도}&appid=${MY_WETEHER_KEY}&units=metric`;
    fetch(url).then(res=>res.json()).then(
        data=>{
            wName.innerText = `도시: ${data.name}`;
            weather.innerHTML = `날씨: ${data.weather[0].main}`;
            wTemp.innerText = `온도: ${data.main.temp}`;
        });
}   

function onGeoErr(){
    alert("위치를 찾지 못했습니다.")
}