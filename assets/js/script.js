var btnEl = document.querySelector(".btn");
var x = 0;

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
            startQuiz();
        } else {
            alert("Your answer is incorrect.");
            x = x + 1;
            startQuiz();
        }
    });
};

var startQuiz = function() {

    //remove old elements
    document.querySelector(".page-title").remove();
    document.querySelector(".main-form").innerHTML = "";

    if (x === myQuestions.length) {
        alert("This is the end of the quiz.")
        // display high score

    } else {
        // write question
        createQuestionEl(myQuestions[x].question);
    
        // add buttons for answers
        createBtnEl(myQuestions[x].a);
        createBtnEl(myQuestions[x].b);
        createBtnEl(myQuestions[x].c);
    };

    // display the score and the highest score
};

btnEl.addEventListener("click", startQuiz);
