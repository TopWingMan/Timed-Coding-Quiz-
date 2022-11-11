var countdown = 60;
var startCountDown = false;

setInterval(function()
{
    if (countdown > 0 && startCountDown === true)
    {
        countdown--;
        document.getElementById("timer").innerHTML = "Timer: " + countdown;
    }
}, 1000)