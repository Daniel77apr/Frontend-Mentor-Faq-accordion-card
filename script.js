const questionEls = document.getElementsByClassName("question-container");
const answerEls = document.getElementsByClassName("answer");
const arrowEls = document.getElementsByClassName("arrow");

function active (num, ...nums) {
    answerEls[num].style.display = "block";
    questionEls[num].style.fontWeight = "700";
    arrowEls[num].style.transform = "rotate(180deg)";
    for (let i = 0; i < nums.length ; i++) {
        let current = nums[i];
        answerEls[current].style.display = "none";
        questionEls[current].style.fontWeight = "400";
        arrowEls[current].style.transform = "rotate(0)";
    }
    
}
function unactive (num) {
    answerEls[num].style.display = "none";
    questionEls[num].style.fontWeight = "400";
    arrowEls[num].style.transform = "rotate(0)";  
}

function onClick0 () {
    if (answerEls[0].style.display != "block") {
        active(0, 1, 2, 3, 4);
    } else {
        unactive(0);
    } 
}

function onClick1 () {
    if (answerEls[1].style.display != "block") {
        active(1, 0, 2, 3, 4);
    } else {
        unactive(1);
    } 
}

function onClick2 () {
    if (answerEls[2].style.display != "block") {
        active(2, 0, 1, 3, 4);
    } else {
        unactive(2);
    } 
}

function onClick3 () {
    if (answerEls[3].style.display != "block") {
        active(3, 0, 1, 2, 4);
    } else {
        unactive(3);
    } 
}

function onClick4 () {
    if (answerEls[4].style.display != "block") {
        active(4, 0, 1, 2, 3);
    } else {
        unactive(4);
    } 
}

questionEls[0].addEventListener("click", onClick0);
questionEls[1].addEventListener("click", onClick1);
questionEls[2].addEventListener("click", onClick2);
questionEls[3].addEventListener("click", onClick3);
questionEls[4].addEventListener("click", onClick4);