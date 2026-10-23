const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        option1: "&lt;script&gt;",
        option2: "&lt;javascript&gt;",
        option3: "&lt;js&gt;",
        correctOption: "&lt;script&gt;",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        option1: "The head section",
        option2: "The body section",
        option3: "Both the head and body section are correct",
        correctOption: "Both the head and body section are correct",
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '&lt;script href="xxx.js"&gt;',
        option2: '&lt;script name="xxx.js"&gt;',
        option3: '&lt;script src="xxx.js"&gt;',
        correctOption: '&lt;script src="xxx.js"&gt;',
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        option1: "msg('Hello World');",
        option2: "alert('Hello World');",
        option3: "msgBox('Hello World');",
        correctOption: "alert('Hello World');",
    },
    {
        question: "How do you create a function in JavaScript?",
        option1: "function myFunction()",
        option2: "function:myFunction()",
        option3: "function = myFunction()",
        correctOption: "function myFunction()",
    },
    {
        question: "How to write an IF statement in JavaScript?",
        option1: "if i = 5",
        option2: "if (i == 5)",
        option3: "if i == 5 then",
        correctOption: "if (i == 5)",
    },
    {
        question: "How does a FOR loop start?",
        option1: "for (i = 0; i <= 5; i++)",
        option2: "for (i <= 5; i++)",
        option3: "for i = 1 to 5",
        correctOption: "for (i = 0; i <= 5; i++)",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        option1: "var colors = 'red', 'green', 'blue'",
        option2: "var colors = (1:'red', 2:'green')",
        option3: "var colors = ['red', 'green', 'blue']",
        correctOption: "var colors = ['red', 'green', 'blue']",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        option1: "onmouseclick",
        option2: "onclick",
        option3: "onchange",
        correctOption: "onclick",
    },
    {
        question: "How do you declare a variable in modern JavaScript?",
        option1: "v x = 10;",
        option2: "variable x = 10;",
        option3: "let x = 10;",
        correctOption: "let x = 10;",
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        option1: "-",
        option2: "=",
        option3: "*",
        correctOption: "=",
    },
    {
        question: "What will `typeof 42` return in JavaScript?",
        option1: "number",
        option2: "string",
        option3: "integer",
        correctOption: "number",
    },
    {
        question: "Which method can convert JSON string into a JavaScript object?",
        option1: "JSON.parse()",
        option2: "JSON.stringify()",
        option3: "JSON.object()",
        correctOption: "JSON.parse()",
    },
    {
        question: "How do you find the length of a string in JavaScript?",
        option1: "x.length",
        option2: "x.size()",
        option3: "length(x)",
        correctOption: "x.length",
    },
    {
        question: "Which JavaScript method is used to add an element at the end of an array?",
        option1: "pop()",
        option2: "push()",
        option3: "shift()",
        correctOption: "push()",
    },
    {
        question: "Which symbol is used for single line comments in JavaScript?",
        option1: "/*",
        option2: "//",
        option3: "&lt;!--",
        correctOption: "//",
    },
    {
        question: "What is the output of `3 + 3 + '3'` in JavaScript?",
        option1: "9",
        option2: "333",
        option3: "63",
        correctOption: "63",
    },
    {
        question: "Which company developed JavaScript?",
        option1: "Netscape",
        option2: "Bell Labs",
        option3: "Sun Microsystems",
        correctOption: "Netscape",
    },
    {
        question: "Which built-in method removes the last element from an array?",
        option1: "last()",
        option2: "pop()",
        option3: "get()",
        correctOption: "pop()",
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        option1: "forEach()",
        option2: "loop()",
        option3: "iterate()",
        correctOption: "forEach()",
    },
    {
        question: "Which keyword is used to define constants in JavaScript?",
        option1: "var",
        option2: "let",
        option3: "const",
        correctOption: "const",
    },
    {
        question: "What is the extension of a JavaScript file?",
        option1: ".java",
        option2: ".js",
        option3: ".script",
        correctOption: ".js",
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        option1: "Math.round(7.25)",
        option2: "Math.ceil(7.25)",
        option3: "Math.floor(7.25)",
        correctOption: "Math.round(7.25)",
    },
    {
        question: "Which method is used to write HTML output using JavaScript?",
        option1: "document.write()",
        option2: "document.output()",
        option3: "console.write()",
        correctOption: "document.write()",
    },
    {
        question: "What does DOM stand for?",
        option1: "Document Object Model",
        option2: "Data Object Management",
        option3: "Digital Oriented Model",
        correctOption: "Document Object Model",
    },
    {
        question: "Which function is used to parse a string to an integer in JavaScript?",
        option1: "Integer.parse()",
        option2: "parseInt()",
        option3: "toInt()",
        correctOption: "parseInt()",
    },
    {
        question: "How can you detect the client browser name in JavaScript?",
        option1: "browser.name",
        option2: "navigator.appName",
        option3: "client.nav",
        correctOption: "navigator.appName",
    },
    {
        question: "Which object is the top-level object in the browser DOM?",
        option1: "Document",
        option2: "Window",
        option3: "Navigator",
        correctOption: "Window",
    },
    {
        question: "What is NaN in JavaScript?",
        option1: "Not a Number",
        option2: "New active Name",
        option3: "Null and None",
        correctOption: "Not a Number",
    },
    {
        question: "Which method converts JavaScript data to a JSON string?",
        option1: "JSON.stringify()",
        option2: "JSON.parse()",
        option3: "JSON.convert()",
        correctOption: "JSON.stringify()",
    },
    {
        question: "Which scope does a variable declared with `let` have inside a block?",
        option1: "Global scope",
        option2: "Block scope",
        option3: "Function scope",
        correctOption: "Block scope",
    },
    {
        question: "What will `Boolean(10 > 9)` return?",
        option1: "true",
        option2: "false",
        option3: "NaN",
        correctOption: "true",
    },
    {
        question: "Which method adds new elements to the beginning of an array?",
        option1: "unshift()",
        option2: "push()",
        option3: "shift()",
        correctOption: "unshift()",
    },
    {
        question: "How do you write a multi-line comment in JavaScript?",
        option1: "/* Comment */",
        option2: "// Comment //",
        option3: "&lt;!-- Comment --&gt;",
        correctOption: "/* Comment */",
    },
    {
        question: "Which of the following is a falsy value in JavaScript?",
        option1: "0",
        option2: "1",
        option3: "'hello'",
        correctOption: "0",
    },
    {
        question: "What does the `strict` mode do in JavaScript?",
        option1: "Enforces cleaner and safer code rules",
        option2: "Speeds up code execution significantly",
        option3: "Allows undeclared variables",
        correctOption: "Enforces cleaner and safer code rules",
    },
    {
        question: "Which operator is used for strict equality (checks value and type)?",
        option1: "==",
        option2: "===",
        option3: "=",
        correctOption: "===",
    },
    {
        question: "What is the return type of a JavaScript function that has no return statement?",
        option1: "undefined",
        option2: "null",
        option3: "void",
        correctOption: "undefined",
    },
    {
        question: "Which method is used to remove the first element from an array?",
        option1: "shift()",
        option2: "pop()",
        option3: "unshift()",
        correctOption: "shift()",
    },
    {
        question: "Which keyword is used to handle exceptions/errors in JavaScript?",
        option1: "try...catch",
        option2: "error...handle",
        option3: "catch...throw",
        correctOption: "try...catch",
    }
];

let quizBox = document.querySelector("#quizBox");
let nextBtn = document.querySelector("#nextBtn");
let timerDisplay = document.querySelector("#timer");

let questionNO = 0;
let score = 0;
let totalTime = 40 * 60; // 40 minutes in seconds
let timerInterval;

// Timer Function
function startTimer() {
    timerInterval = setInterval(() => {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = `${minutes}:${seconds}`;

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            endQuiz("Time's Up!");
        } else {
            totalTime--;
        }
    }, 1000);
}

const showQuestion = () => {
    if (questionNO < questions.length) {
        let q = questions[questionNO];
        quizBox.innerHTML = `
            <h3>Q${questionNO + 1}: ${q.question}</h3>
            <label class="option-label">
                <input type="radio" name="options" value="${q.option1}"> ${q.option1}
            </label>
            <label class="option-label">
                <input type="radio" name="options" value="${q.option2}"> ${q.option2}
            </label>
            <label class="option-label">
                <input type="radio" name="options" value="${q.option3}"> ${q.option3}
            </label>
        `;
        nextBtn.disabled = true;

        const options = document.querySelectorAll("input[name='options']");
        options.forEach((option) => {
            option.addEventListener("change", () => {
                nextBtn.disabled = false;
            });
        });
    } else {
        endQuiz("Quiz Completed!");
    }
};

function endQuiz(message) {
    clearInterval(timerInterval);
    let percentage = ((score / questions.length) * 100).toFixed(2);
    quizBox.innerHTML = `
        <div class="result-box">
            <h2>${message}</h2>
            <p>Your Score: <strong>${score}</strong> out of <strong>${questions.length}</strong></p>
            <p>Percentage: <strong>${percentage}%</strong></p>
        </div>
    `;
    nextBtn.style.display = "none";
}

// Next Button Event
nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='options']:checked");
    if (selectedOption) {
        if (selectedOption.value === questions[questionNO].correctOption) {
            score++;
        }
    }
    questionNO++;
    showQuestion();
});

// Initialize Quiz
startTimer();
showQuestion();