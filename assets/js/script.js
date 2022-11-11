var countdown = 61;
var startCountDown = false;

setInterval(function()
{
    if (countdown > 0 && startCountDown === true)
    {
        countdown--;
        document.getElementById("timer").innerHTML = "Timer: " + countdown;
    }
}, 1000)

document.getElementById("start-button").addEventListener("click", function()
{
    console.log("Cheese");
    document.getElementById("starting-page").style.visibility = "hidden";
    startCountDown = true;
})