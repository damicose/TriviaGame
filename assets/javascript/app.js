// Only allow one answer (activated button??) per question, can toggle between choices

// Set total time for quiz (operating in background)--click button to begin timer/show questions?
// Create different alerts depending on whether time elapsed (show time remaining stat?)

// Track which answer options for each question are correct/incorrect
// Programatically evaluate right/wrong and spit out those values
// 
let right = 0
let wrong = 0

// function chose() {
    
// }

function uncheck() {
    document.querySelectorAll("custom-control-input").checked = false;
  }

function reset() {
    uncheck();
    right = 0;
    wrong = 0;
    // document.getElementById("1customRadioInline2").classList.remove("chosen");
    // document.getElementById("2customRadioInline3").classList.remove("chosen");
    // document.getElementById("3customRadioInline1").classList.remove("chosen");
    // document.getElementById("4customRadioInline4").classList.remove("chosen");
    // document.getElementById("5customRadioInline2").classList.remove("chosen");
}

function results() {
    alert("You got " + right + " questions right and " + wrong + " questions wrong!");
    reset();
}

function startTime() {
    setTimeout(checkAns, 5000);
}

// document.getElementById("1customRadioInline2").addEventListener("change", chose())
// document.getElementById("2customRadioInline3").addEventListener("change", chose())
// document.getElementById("3customRadioInline1").addEventListener("change", chose())
// document.getElementById("4customRadioInline4").addEventListener("change", chose())
// document.getElementById("5customRadioInline2").addEventListener("change", chose())


let isCheck1 = document.getElementById("1customRadioInline2").checked
let isCheck2 = document.getElementById("2customRadioInline3").checked
let isCheck3 = document.getElementById("3customRadioInline1").checked
let isCheck4 = document.getElementById("4customRadioInline4").checked
let isCheck5 = document.getElementById("5customRadioInline2").checked



function checkAns() {
    
    if (isCheck1 = true) {
        right++
    }
    else {
        wrong++
    }
    if (isCheck2 = true) {
        right++
    }
    else {
        wrong++
    }
    if (isCheck3 = true) {
        right++
    }
    else {
        wrong++
    }
    if (isCheck4 = true) {
        right++
    }
    else {
        wrong++
    }
    if (isCheck5) {
        right++
    }
    else {
        wrong++
    }
    results()
}

document.getElementById("timer").addEventListener("click", startTime())

document.getElementById("submit").addEventListener("click", checkAns())
// Reset game upon clicking an 'ok' button on right/wrong screen (no refresh)