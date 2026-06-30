var questions = [
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

var results = {
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

var currentQuestion = 0;
var scores = {};

function showScreen(screenId) {
  var screens = document.getElementsByClassName("screen");

  for (var i = 0; i < screens.length; i++) {
    screens[i].className = "screen";
  }

  document.getElementById(screenId).className = "screen active";
}

function startQuiz() {
  currentQuestion = 0;
  scores = {};
  showScreen("quiz-screen");
  showQuestion();
}

function showQuestion() {
  var question = questions[currentQuestion];

  document.getElementById("question-count").innerHTML =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

  document.getElementById("question-text").innerHTML = question.question;

  var answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  for (var i = 0; i < question.answers.length; i++) {
    var answer = question.answers[i];

    var button = document.createElement("button");
    button.className = "answer-button";
    button.innerHTML = answer.text;
    button.setAttribute("data-type", answer.type);

    button.onclick = function () {
      selectAnswer(this.getAttribute("data-type"));
    };

    answersDiv.appendChild(button);
  }
}

function selectAnswer(type) {
  scores[type] = scores[type] ? scores[type] + 1 : 1;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  var topType = null;
  var topScore = -1;

  for (var type in scores) {
    if (scores[type] > topScore) {
      topType = type;
      topScore = scores[type];
    }
  }

  var result = results[topType];

  document.getElementById("result-title").innerHTML =
    "You are a " + result.title + "!";

  document.getElementById("result-description").innerHTML =
    result.description;

  showScreen("result-screen");

  sendResultToPepper(
    "You are a " + result.title + ". " + result.description
  );
}

function sendResultToPepper(message) {
  if (typeof QiSession === "undefined") {
    return;
  }

  QiSession(function (session) {
    session.service("ALMemory").then(function (memory) {
      memory.raiseEvent("PepperFreshers/Result", message);
    });
  });
}

var localDanceAudio = null;

function playLocalDanceAudio(danceName) {
  var audioFile = "";

  if (danceName === "dance_knights") {
    audioFile = "../behavior_1/kishitachinoodori.ogg";
  }

  if (danceName === "walk_this_way") {
    audioFile = "../behavior_1/walk_this_way.ogg";
  }

  if (danceName === "hungarian") {
    audioFile = "../behavior_1/02_Hungary.ogg";
  }

  if (audioFile === "") {
    return;
  }

  if (localDanceAudio) {
    localDanceAudio.pause();
    localDanceAudio.currentTime = 0;
  }

  localDanceAudio = new Audio(audioFile);
  localDanceAudio.play();
}

function nextSection() {
  showScreen("projects-screen");
}

function selectProject(projectName) {
  sendResultToPepper("You selected " + projectName + ".");
}

function selectDance(danceName) {
  showScreen("dance-playing-screen");

  playLocalDanceAudio(danceName);

  if (typeof QiSession === "undefined") {
    console.log("Running locally, not sending to Pepper:", danceName);
    return;
  }

  QiSession(function (session) {
    session.service("ALMemory").then(function (memory) {
      memory.raiseEvent("PepperFreshers/DanceSelected", danceName);
    });
  });
}

function selectRefreshers(refreshersName) {
  showScreen("dance-playing-screen");

  if (typeof QiSession === "undefined") {
    console.log("Running locally, not sending to Pepper:", refreshersName);
    return;
  }

  QiSession(function (session) {
    session.service("ALMemory").then(function (memory) {
      memory.raiseEvent("PepperFreshers/RefreshersSelected", refreshersName);
    });
  });
}

function resetQuiz() {
  showScreen("start-screen");
}