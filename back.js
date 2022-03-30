const body = document.querySelector("body");
const img = [
    "01.jpg","02.jpg","03.jpg"
]
const RandomImg = img[Math.floor(Math.random()*img.length)];
const IMAGE = document.createElement("img")
IMAGE.src=`img/${RandomImg}`;
body.appendChild(IMAGE);