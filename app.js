const questions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      option1: "script",
      option2: "javascript",
      option3: "js",
      correctOption: "script",
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
      option1: "script href=xxx.js",
      option2: "script name=xxx.js",
      option3: "script src=xxx.js",
      correctOption: "script src=xxx.js",
    },
  ];
  let quizBox = document.querySelector("#quizBox")
  let nextBtn = document.querySelector("#nextBtn")
  let questionNO = 0
  
  const showQuestion = () => {
    if (questionNO != questions.length) {
      quizBox.innerHTML = `<h1> ${questionNO + 1}; ${questions[questionNO].question} </h1>
      <label >
      <input type="radio" name="options" value="${questions[questionNO].option1}">
      ${questions[questionNO].option1}
  </label>
  <br/>
  <br/>
  <label >
  <input type="radio" name="options" value="${questions[questionNO].option2}">
  ${questions[questionNO].option2}
  </label>
  <br/>
  <br/>
  <label >
  <input type="radio" name="options" value="${questions[questionNO].option3}">
  ${questions[questionNO].option3}
  </label>
  <br/>
  <br/>
  
      `
      nextBtn.disabled = true
      const options = document.querySelectorAll("input")
  
      options.forEach((option) => {
        option.addEventListener("click", () => {
          nextBtn.disabled = false
          console.log(option.value)
          if (option.value == questions[questionNO].correctOption) {
  
          }
  
        })
      })
    }
    else {
      quizBox.innerHTML = "Quiz End"
      nextBtn.style.display = "none"
    }
  }
  
  showQuestion()
  nextBtn.addEventListener("click", () => {
    questionNO++
    showQuestion()
  })