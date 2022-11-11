var countdown = 60;

setInterval(function()
{
    if (countdown > 0)
    {
        countdown--;
        document.getElementById("timer").innerHTML = "Timer: " + countdown;
    }
}, 1000)