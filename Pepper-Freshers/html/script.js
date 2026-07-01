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
var localVideo = null;

function isPepperTablet() {
  return (typeof QiSession !== "undefined");
}

function setPlayingScreen(message, returnScreen) {
  var messageEl = document.getElementById("playing-message");
  var backButton = document.getElementById("playing-back-button");
  var preview = document.getElementById("local-preview");

  if (messageEl) messageEl.innerHTML = message;
  if (backButton) backButton.onclick = function () { stopLocalMedia(); showScreen(returnScreen); };
  if (preview) preview.innerHTML = "";

  showScreen("dance-playing-screen");
}

function stopLocalMedia() {
  if (localDanceAudio) {
    localDanceAudio.pause();
    localDanceAudio.currentTime = 0;
    localDanceAudio = null;
  }
  if (localVideo) {
    localVideo.pause();
    localVideo.currentTime = 0;
    localVideo = null;
  }
}

function playLocalDanceAudio(danceName) {
  var audioFile = "";
  if (danceName === "dance_knights") audioFile = "../behavior_1/kishitachinoodori.ogg";
  if (danceName === "walk_this_way") audioFile = "../behavior_1/walk_this_way.ogg";
  if (danceName === "02_Hungary" || danceName === "hungarian" || danceName === "hungary") audioFile = "../behavior_1/02_Hungary.ogg";
  if (audioFile === "") return;
  stopLocalMedia();
  localDanceAudio = new Audio(audioFile);
  localDanceAudio.play().catch(function (err) { console.log("Local dance audio could not play:", err); });
}

function playLocalRefreshers(refreshersName) {
  var preview = document.getElementById("local-preview");
  var audioFile = "";
  var videoFile = "";

  if (refreshersName === "Bees") {
    videoFile = "../refreshers/Bees_Gees.mp4";
    audioFile = "../refreshers/epicsax.ogg";
  }
  if (refreshersName === "Surprise") {
    videoFile = "../refreshers/Rick Roll Link.mp4";
    audioFile = "../refreshers/swiftswords_ext.mp3";
  }
  if (refreshersName === "Speech") {
    videoFile = "../refreshers/HullRS_Christmas_2025.mp4";
  }

  stopLocalMedia();

  if (preview && videoFile !== "") {
    preview.innerHTML = '<video id="refreshers-local-video" width="80%" controls autoplay><source src="' + videoFile + '" type="video/mp4"></video>';
    localVideo = document.getElementById("refreshers-local-video");
  }

  if (audioFile !== "") {
    localDanceAudio = new Audio(audioFile);
    localDanceAudio.play().catch(function (err) { console.log("Local refreshers audio could not play:", err); });
  }
}

function nextSection() {
  stopLocalMedia();
  showScreen("projects-screen");
}

function selectProject(projectName) {
  sendResultToPepper("You selected " + projectName + ".");
}

function raisePepperEvent(eventName, value) {
  if (!isPepperTablet()) {
    console.log("LOCAL TEST: would send to Pepper:", eventName, value);
    return;
  }

  QiSession(function (session) {
    session.service("ALMemory").then(function (memory) {
      memory.raiseEvent(eventName, value);
    });
  });
}

function selectDance(danceName) {
  setPlayingScreen("Pepper is dancing!", "pepper-dance-screen");

  if (!isPepperTablet()) {
    console.log("LOCAL TEST: dance selected:", danceName);
    playLocalDanceAudio(danceName);
    return;
  }

  raisePepperEvent("PepperFreshers/DanceSelected", danceName);
}

function selectRefreshers(refreshersName) {
  setPlayingScreen("Pepper is starting Refreshers: " + refreshersName, "refreshers-screen");

  if (!isPepperTablet()) {
    console.log("LOCAL TEST: refreshers selected:", refreshersName);
    playLocalRefreshers(refreshersName);
    return;
  }

  raisePepperEvent("PepperFreshers/RefreshersSelected", refreshersName);
  raisePepperEvent("PepperFreshers/DanceSelected", refreshersName);
}

function resetQuiz() {
  stopLocalMedia();
  showScreen("start-screen");
}

function setupPepperReturnEvents() {
  if (!isPepperTablet()) return;

  QiSession(function (session) {
    session.service("ALMemory").then(function (memory) {
      memory.subscriber("PepperFreshers/ReturnToDancePage").then(function (subscriber) {
        subscriber.signal.connect(function () {
          stopLocalMedia();
          showScreen("pepper-dance-screen");
        });
      });

      memory.subscriber("PepperFreshers/ReturnToRefreshersPage").then(function (subscriber) {
        subscriber.signal.connect(function () {
          stopLocalMedia();
          showScreen("refreshers-screen");
        });
      });
    });
  });
}

window.onload = function () {
  setupPepperReturnEvents();
};
