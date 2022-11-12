var countdown = 61;
var startCountDown = false;
var feedbackAnswer = "Answer!";

setInterval(function()
{
    if (countdown > 0 && startCountDown === true)
    {
        countdown--;
        document.getElementById("timer").innerHTML = "Timer: " + countdown;
    }
}, 1000)

document.getElementById("start-button").addEventListener("click", function page1(event)
{
    // event.stopPropagation()
    document.getElementById("starting-page").style.display = "none";
    document.getElementById("question-page-1").style.display = "flex";
    startCountDown = true;
})

document.getElementById("question-button-1").addEventListener("click", function page2(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-2").style.display = "flex";
    document.getElementById("question-page-1").style.display = "none";
    document.getElementById("feedback").style.display = "flex";
})

document.getElementById("question-button-2").addEventListener("click", function page3(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-3").style.display = "flex";
    document.getElementById("question-page-2").style.display = "none";
})

document.getElementById("question-button-3").addEventListener("click", function page4(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-4").style.display = "flex";
    document.getElementById("question-page-3").style.display = "none";
})

document.getElementById("question-button-4").addEventListener("click", function page5(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-5").style.display = "flex";
    document.getElementById("question-page-4").style.display = "none";
})

document.getElementById("question-button-5").addEventListener("click", function page6(event)
{
    // event.stopPropagation()
    //go to score page
    document.getElementById("question-page-5").style.display = "none";
})