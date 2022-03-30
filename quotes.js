const quotes= [
    {
        quote: "Forgiveness is better than revenge.",
        name: "Kim"
    },
    {
        quote: "Books are ships which pass through the vast seas of time.",
        name: "Kim1"
    },
    {
        quote: "Faith is a higher faculty than reason.",
        name: "Kim2"
    },
    {
        quote: "I never think of the future. It comes soon enough.",
        name: "Kim2"
    },
    {
        quote: "Suspicion follows close on mistrust",
        name: "Kim2"
    }
]
const quoteText = document.getElementById("명언");

function PaintText(){
    const indexNum = Math.floor(Math.random()*quotes.length);
    quoteText.innerText = quotes[indexNum].quote   
}
PaintText()

