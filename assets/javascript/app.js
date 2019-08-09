// Only allow one answer (activated button??) per question, can toggle between choices

// Set total time for quiz (operating in background)--click button to begin timer/show questions?
// Create different alerts depending on whether time elapsed (show time remaining stat?)

// Track which answer options for each question are correct/incorrect
// Programatically evaluate right/wrong and spit out those values
// 
let right = 0
let wrong = 0

function chose() {
    classList.add("chosen")
}

function results(){
    document.getElementById("quest").innerHTML = "<h1>You got " + right + " questions right and " + wrong + " questions wrong!</h1>";
document.createElement("button")
}

document.getElementById("1customRadioInline2").addEventListener("change", chose())
document.getElementById("2customRadioInline3").addEventListener("change", chose())
document.getElementById("3customRadioInline1").addEventListener("change", chose())
document.getElementById("4customRadioInline4").addEventListener("change", chose())
document.getElementById("5customRadioInline2").addEventListener("change", chose())






function checkAns() {
    if (document.getElementById("1customRadioInline2").contains("chosen")) {
        right++
    }
    else {
        wrong++
    }
    if (document.getElementById("2customRadioInline3").contains("chosen")) {
        right++
    }
    else {
        wrong++
    }
    if (document.getElementById("3customRadioInline1").contains("chosen")) {
        right++
    }
    else {
        wrong++
    }
    if (document.getElementById("4customRadioInline4").contains("chosen")) {
        right++
    }
    else {
        wrong++
    }
    if (document.getElementById("5customRadioInline2").contains("chosen")) {
        right++
    }
    else {
        wrong++
    }
    results()
}


// Reset game upon clicking an 'ok' button on right/wrong screen (no refresh)