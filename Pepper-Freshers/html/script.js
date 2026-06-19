
// Define the questions and answers for the quiz. Each question has a text prompt and a list of possible answers, each associated with a type of robot enthusiast.
const questions = [
  {
    question: "What sounds most interesting?",
    answers: [
      { text: "Building a robot", type: "embedded" },
      { text: "Programming AI", type: "ai" },
      { text: "Designing electronics", type: "embedded" },
      { text: "Solving real-world problems", type: "rescue" }
    ]
  },
  {
    question: "Which robot would you rather build?",
    answers: [
      { text: "Delivery robot", type: "autonomous" },
      { text: "Rescue robot", type: "rescue" },
      { text: "Drone", type: "drone" },
      { text: "Humanoid robot", type: "ai" }
    ]
  },
  {
    question: "What would you rather learn?",
    answers: [
      { text: "ROS2", type: "autonomous" },
      { text: "Computer Vision", type: "vision" },
      { text: "Embedded Systems", type: "embedded" },
      { text: "Machine Learning", type: "ai" }
    ]
  },
  {
    question: "Favourite sci-fi robot?",
    answers: [
      { text: "R2-D2", type: "embedded" },
      { text: "WALL-E", type: "rescue" },
      { text: "TARS", type: "ai" },
      { text: "Data", type: "ai" }
    ]
  },
  {
    question: "You have £100 and a weekend. What do you build?",
    answers: [
      { text: "Robot car", type: "autonomous" },
      { text: "Smart home system", type: "embedded" },
      { text: "AI assistant", type: "ai" },
      { text: "Drone", type: "drone" }
    ]
  }
];
// Define the results for each type of robot enthusiast from the quiz. 
// Each type has a title and a description that explains what kind of robot enthusiast they are based on their answers to the quiz questions.
const results = {
  ai: {
    title: "AI Researcher",
    description: "You enjoy solving complex problems using machine learning and intelligent systems."
  },
  rescue: {
    title: "Rescue Robotics Engineer",
    description: "You enjoy designing robots that can help people in dangerous environments."
  },
  embedded: {
    title: "Embedded Systems Engineer",
    description: "You enjoy working with hardware, sensors and electronics."
  },
  autonomous: {
    title: "Autonomous Systems Engineer",
    description: "You enjoy building robots that can think and act independently."
  },
  vision: {
    title: "Computer Vision Specialist",
    description: "You enjoy teaching robots how to see and understand the world."
  },
  drone: {
    title: "Drone Specialist",
    description: "You enjoy flying robots, navigation and remote systems."
  }
};

let currentQuestion = 0;
let scores = {};

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}
// Start the quiz by resetting the current question index and scores, then show the quiz screen and display the first question.
function startQuiz() {
  currentQuestion = 0;
  scores = {};
  showScreen("quiz-screen");
  showQuestion();
}
// Display the current question and its possible answers on the quiz screen. 
// The function updates the question count, question text, and creates buttons for each answer.
function showQuestion() {
  const question = questions[currentQuestion];

  document.getElementById("question-count").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  document.getElementById("question-text").textContent = question.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-button");

    button.onclick = () => selectAnswer(answer.type);

    answersDiv.appendChild(button);
  });
}
// Update the score for the selected answer type, move to the next question, and either show the next question or display the final result if all questions have been answered.
function selectAnswer(type) {
  scores[type] = (scores[type] || 0) + 1;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}
// Calculate the type of robot enthusiast with the highest score and display the corresponding result on the result screen.
function showResult() {
  let topType = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const result = results[topType];

  document.getElementById("result-title").textContent =
    `You are a ${result.title}!`;

  document.getElementById("result-description").textContent =
    result.description;

  showScreen("result-screen");
}

function resetQuiz() {
  showScreen("start-screen");
}