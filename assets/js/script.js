var quizContainer = document.querySelector(".main-form");
var resultsContainer = document.querySelector(".results");
var btnEl = document.querySelector(".btn");
var data = [
    {
        question: "1st question",
        answers: {
            a: "first answer",
            b: "second answer",
            c: "third answer"
        },
        correctAnswer: "a"
    },
    {
        question: "2nd question",
        answers: {
            a: "first answer",
            b: "second answer",
            c: "third answer"
        },
        correctAnswer: "b"
    }
];

var buildQuiz = function() {
    // remove intro h1 and start quiz button
    document.querySelector("#intro").remove();
    document.querySelector("#start-quiz").remove();

    var output=[];

    for (var i = 0; i < data.length; i++) {
        var userSelection = "";
        
         // write question on page
         createQuestionEl(data[i].question);

        for (letter in data[i].answers) {
            createBtnEl(data[i].answers);
        }
    }
};

var showResults = function() {

};

var createQuestionEl = function(questionTxtContent) {
    var question = document.createElement("h1");
    question.className = "page-title";
    question.textContent = questionTxtContent;
    console.log(question);
    document.querySelector(".main-form").appendChild(question);
}

var createBtnEl = function(btnTxtContent) {
    var btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = btnTxtContent;
    console.log(btn);
    document.querySelector(".main-form").appendChild(btn);
};

btnEl.addEventListener("click", buildQuiz);