const questionEls = document.getElementsByClassName("question-container");
const answerEls = document.getElementsByClassName("answer");
const arrowEls = document.getElementsByClassName("arrow");

function revealAndHide(active, ...unactive) {
    answerEls[active].style.display = "block";
    questionEls[active].style.fontWeight = "700";
    arrowEls[active].style.transform = "rotate(180deg)";
    for (let i = 0; i < unactive.length ; i++) {
        let current = unactive[i];
        answerEls[current].style.display = "none";
        questionEls[current].style.fontWeight = "400";
        arrowEls[current].style.transform = "rotate(0)";
    }
}

function hide(unactive) {
    answerEls[unactive].style.display = "none";
    questionEls[unactive].style.fontWeight = "400";
    arrowEls[unactive].style.transform = "rotate(0)";  
}

function onClick0 () {
    answerEls[0].style.display != "block" ? revealAndHide(0, 1, 2, 3, 4) : hide(0);
}

function onClick1 () {
    answerEls[1].style.display != "block" ? revealAndHide(1, 0, 2, 3, 4) : hide(1);
}

function onClick2 () {
    answerEls[2].style.display != "block" ? revealAndHide(2, 0, 1, 3, 4) : hide(2);
}

function onClick3 () {
    answerEls[3].style.display != "block" ? revealAndHide(3, 0, 1, 2, 4) : hide(3);
}

function onClick4 () {
    answerEls[4].style.display != "block" ? revealAndHide(4, 0, 1, 2, 3) : hide(4);
}

questionEls[0].addEventListener("click", onClick0);
questionEls[1].addEventListener("click", onClick1);
questionEls[2].addEventListener("click", onClick2);
questionEls[3].addEventListener("click", onClick3);
questionEls[4].addEventListener("click", onClick4);