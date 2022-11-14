var countdown = 61;
var startCountDown = false;
var feedbackAnswer = "Answer!";
var answer1 = "Wrong!";
var answer2 = "Wrong!";
var answer3 = "Wrong!";
var answer4 = "Wrong!";
var answer5 = "Wrong!";

setInterval(function()
{
    if (countdown > 0 && startCountDown === true)
    {
        countdown--;
        document.getElementById("timer").innerHTML = "Timer: " + countdown;
    }
}, 1000)

document.getElementById("start-button").addEventListener("click", function question1Button(event)
{
    // event.stopPropagation()
    document.getElementById("starting-page").style.display = "none";
    document.getElementById("question-page-1").style.display = "flex";
    startCountDown = true;
})

//question page 1
document.getElementById("question-button-1-1").addEventListener("click", function page2(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-2").style.display = "flex";
    document.getElementById("question-page-1").style.display = "none";
    document.getElementById("feedback").style.display = "flex";
})
document.getElementById("question-button-1-2").addEventListener("click", function page2(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-2").style.display = "flex";
    document.getElementById("question-page-1").style.display = "none";
    document.getElementById("feedback").style.display = "flex";
})
document.getElementById("question-button-1-3").addEventListener("click", function page2(event) //Correct answer
{
    // event.stopPropagation()
    document.getElementById("question-page-2").style.display = "flex";
    document.getElementById("question-page-1").style.display = "none";
    document.getElementById("feedback").style.display = "flex";
    answer1 = "Correct!";
})
document.getElementById("question-button-1-4").addEventListener("click", function page2(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-2").style.display = "flex";
    document.getElementById("question-page-1").style.display = "none";
    document.getElementById("feedback").style.display = "flex";
})

//question page 2
document.getElementById("question-button-2-1").addEventListener("click", function page3(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-3").style.display = "flex";
    document.getElementById("question-page-2").style.display = "none";
})
document.getElementById("question-button-2-2").addEventListener("click", function page3(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-3").style.display = "flex";
    document.getElementById("question-page-2").style.display = "none";
})
document.getElementById("question-button-2-3").addEventListener("click", function page3(event) //correct answer
{
    // event.stopPropagation()
    document.getElementById("question-page-3").style.display = "flex";
    document.getElementById("question-page-2").style.display = "none";
    answer2 = "Correct!";
})
document.getElementById("question-button-2-4").addEventListener("click", function page3(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-3").style.display = "flex";
    document.getElementById("question-page-2").style.display = "none";
})

//question page 3
document.getElementById("question-button-3-1").addEventListener("click", function page4(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-4").style.display = "flex";
    document.getElementById("question-page-3").style.display = "none";
})
document.getElementById("question-button-3-2").addEventListener("click", function page4(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-4").style.display = "flex";
    document.getElementById("question-page-3").style.display = "none";
})
document.getElementById("question-button-3-3").addEventListener("click", function page4(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-4").style.display = "flex";
    document.getElementById("question-page-3").style.display = "none";
})
document.getElementById("question-button-3-4").addEventListener("click", function page4(event) //correct answer
{
    // event.stopPropagation()
    document.getElementById("question-page-4").style.display = "flex";
    document.getElementById("question-page-3").style.display = "none";
    answer3 = "Correct!";
})

//question page 4
document.getElementById("question-button-4-1").addEventListener("click", function page5(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-5").style.display = "flex";
    document.getElementById("question-page-4").style.display = "none";
})
document.getElementById("question-button-4-2").addEventListener("click", function page5(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-5").style.display = "flex";
    document.getElementById("question-page-4").style.display = "none";
})
document.getElementById("question-button-4-3").addEventListener("click", function page5(event) //correct answer
{
    // event.stopPropagation()
    document.getElementById("question-page-5").style.display = "flex";
    document.getElementById("question-page-4").style.display = "none";
    answer4 = "Correct!";
})
document.getElementById("question-button-4-4").addEventListener("click", function page5(event)
{
    // event.stopPropagation()
    document.getElementById("question-page-5").style.display = "flex";
    document.getElementById("question-page-4").style.display = "none";
})

//question page 5
document.getElementById("question-button-5-1").addEventListener("click", function page6(event)
{
    // event.stopPropagation()
    //go to score page
    document.getElementById("question-page-5").style.display = "none";
    logAnswers();
})
document.getElementById("question-button-5-2").addEventListener("click", function page6(event)
{
    // event.stopPropagation()
    //go to score page
    document.getElementById("question-page-5").style.display = "none";
    logAnswers();
})
document.getElementById("question-button-5-3").addEventListener("click", function page6(event)
{
    // event.stopPropagation()
    //go to score page
    document.getElementById("question-page-5").style.display = "none";
    logAnswers();
})
document.getElementById("question-button-5-4").addEventListener("click", function page6(event) //correct answer
{
    // event.stopPropagation()
    //go to score page
    document.getElementById("question-page-5").style.display = "none";
    answer5 = "Correct!";
    logAnswers();
})

function logAnswers()
{
    console.log(answer1, answer2, answer3, answer4, answer5)
}