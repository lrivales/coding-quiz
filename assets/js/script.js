var btnEl = document.querySelector(".btn");
var x = 0;
var sec = 20;
var score = 0;

var createQuestionEl = function(questionTxtContent) {
    // create new h1 element
    var question = document.createElement("h1");
    question.className = "page-title";
    question.textContent = questionTxtContent;
    document.querySelector(".main-form").appendChild(question);
}

var createBtnEl = function(btnTxtContent) {
    // create new button element
    var btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = btnTxtContent;
    btn.setAttribute("id","answerBtn");
    document.querySelector(".main-form").appendChild(btn);

    // get user selected answer
    btn.addEventListener("click", function() {
        var selectedAnswer = btn.textContent;
        
        // compare selected answer with correct answer
        if (selectedAnswer === myQuestions[x].correctAnswer) {
            alert("Your answer is correct!");
            x = x + 1;
            score = score + 10;
            startQuiz();
        } else {
            alert("Your answer is incorrect.");
            x = x + 1;
            sec = sec - 3;
            startQuiz();
        }
    });
};

var startQuiz = function() {

    //remove old elements
    document.querySelector(".page-title").remove();
    document.querySelector(".main-form").innerHTML = "";

    if (x === myQuestions.length || timer === 0) {
        alert("This is the end of the quiz.");
        saveScore();
        window.location.href = "highscores.html";
    } else {
        // write question
        createQuestionEl(myQuestions[x].question);
    
        // add buttons for answers
        createBtnEl(myQuestions[x].a);
        createBtnEl(myQuestions[x].b);
        createBtnEl(myQuestions[x].c);
    };
};

var timer = function() {
    var timer = setInterval(function() {
        document.querySelector("#timer").innerHTML = "Time Remaining: " + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("You are out of time.");
            saveScore();
            window.location.href = "highscores.html";
        }
    }, 1000);
};

var saveScore = function() {
    initials = prompt("Enter your initials.");
    localStorage.setItem(initials, score);
}

btnEl.addEventListener("click", function(){
    startQuiz();
    timer();
});