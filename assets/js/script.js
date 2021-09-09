var btnEl = document.querySelector(".btn");
var answerBtnEl = document.querySelector(".btn[id='answerBtn']");

var myQuestions = [
    {
        question: "1+1",
        a: "2",
        b: "1",
        c: "3",
        correctAnswer: "2"
    },
    {
        question: "2+2",
        a: "3",
        b: "4",
        c: "6",
        correctAnswer: "4"
    }
];

var createQuestionEl = function(questionTxtContent) {
    var question = document.createElement("h1");
    question.className = "page-title";
    question.textContent = questionTxtContent;
    document.querySelector(".main-form").appendChild(question);
}

var createBtnEl = function(btnTxtContent) {
    var btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = btnTxtContent;
    btn.setAttribute("id","answerBtn");
    console.log(btn);
    document.querySelector(".main-form").appendChild(btn);
};

var startQuiz = function() {
    var x = 0;

    //remove old elements
    document.querySelector(".page-title").remove();
    document.querySelector(".btn").remove();

    // write question
    createQuestionEl(myQuestions[x].question);
    
    // add buttons for answers
    createBtnEl(myQuestions[x].a);
    createBtnEl(myQuestions[x].b);
    createBtnEl(myQuestions[x].c);

    // get selected answer
    answerBtnEl.addEventListener("click", function(event) {
        var selectedAnswer = event.textContent;
        console.log(selectedAnswer);
    });

    // compare selected answer with correct answer

    // go to next question
 
    // if there are no more questions, end the quiz

    // display the score and the highest score
};

btnEl.addEventListener("click", startQuiz);
