#Pepper-Freshers
# Hull Robotics Society Freshers Fair 2026-27

## Pepper Robotics Personality Test & Society Showcase

---

# Project Overview

For Freshers Fair 2026-27, Pepper will act as both an interactive attraction and a showcase of the Hull Robotics Society's achievements.

The primary goal is to attract new students, demonstrate a real robotics project, and encourage membership sign-ups.

The system will consist of two main modes:

1. Interactive Personality Test
2. Society Showcase Presentation

Pepper will remain in an idle state until a student interacts with the robot by touching Pepper's head.

---

# Objectives

## Recruitment

* Encourage students to join the society.
* Promote the Discord server.
* Promote the society website and social media.

## Demonstration

* Show a real robotics project developed by the society.
* Demonstrate human-robot interaction.
* Demonstrate tablet-based applications running on Pepper.

## Engagement

* Provide a fun activity that takes less than 2 minutes.
* Encourage conversation with committee members.
* Create a memorable first impression.

---

# System Workflow

```text
IDLE MODE
    ↓
Student Touches Pepper's Head
    ↓
Pepper Greets Student
    ↓
Personality Quiz Begins
    ↓
Student Answers Questions
    ↓
Result Generated
    ↓
Pepper Announces Result
    ↓
QR Codes Displayed
    ↓
Society Showcase Starts
    ↓
Presentation Ends
    ↓
Return To Idle Mode
```

---

# Stage 1 - Idle Mode

Pepper remains stationary waiting for interaction.

Tablet Display:

"Touch Pepper's head to begin."

Example Speech:

"Hello! Interested in Robotics or AI?"

"Tap my head to discover your robotics personality."

"I'm Pepper, the Hull Robotics Society robot."

These messages will repeat periodically while Pepper is idle.

---

# Stage 2 - Personality Test

When Pepper's head sensor is activated:

Pepper says:

"Hello! Let's find out what kind of roboticist you are."

The tablet launches a custom HTML/CSS/JavaScript application.

Questions are displayed one at a time.

---

# Example Questions

## Question 1

What sounds most interesting?

* Building a robot
* Programming AI
* Designing electronics
* Solving real-world problems

---

## Question 2

Which robot would you rather build?

* Delivery Robot
* Rescue Robot
* Drone
* Humanoid Robot

---

## Question 3

What would you rather learn?

* ROS2
* Computer Vision
* Embedded Systems
* Machine Learning

---

## Question 4

Favourite Sci-Fi Robot?

* R2-D2
* WALL-E
* TARS
* Data

---

## Question 5

You have £100 and a free weekend. What do you build?

* Robot Car
* Smart Home
* AI Assistant
* Drone

---

# Stage 3 - Personality Result

The quiz calculates a score based on the selected answers.

Pepper announces the result.

---

## AI Researcher

"You are an AI Researcher."

"You enjoy solving complex problems using machine learning and intelligent systems."

---

## Rescue Robotics Engineer

"You are a Rescue Robotics Engineer."

"You enjoy designing robots that can help people in dangerous environments."

---

## Embedded Systems Engineer

"You are an Embedded Systems Engineer."

"You enjoy working with hardware, sensors and electronics."

---

## Autonomous Systems Engineer

"You are an Autonomous Systems Engineer."

"You enjoy building robots that can think and act independently."

---

## Computer Vision Specialist

"You are a Computer Vision Specialist."

"You enjoy teaching robots how to see and understand the world around them."

---

# Stage 4 - Society Recruitment

After displaying the result:

Pepper says:

"If that sounds interesting, you should join Hull Robotics Society."

The tablet displays:

* Discord QR Code
* Society Website QR Code
* Instagram QR Code

Pepper says:

"Scan the QR code to join us."

Students may also take photographs with Pepper during this stage.

---

# Stage 5 - Society Showcase

After approximately 15-20 seconds, Pepper automatically enters Showcase Mode.

This serves as a demonstration of what the society has achieved during the previous academic year.

---

# Showcase Slides

## Slide 1

Welcome to Hull Robotics Society

Speech:

"Welcome to Hull Robotics Society."

---

## Slide 2

Events and Workshops

Speech:

"This year we hosted robotics workshops and practical learning sessions."

---

## Slide 3

Pepper Development

Speech:

"Our members worked on developing new functionality for Pepper."

---

## Slide 4

Student Projects

Speech:

"Students developed robotics, AI and embedded systems projects throughout the year."

---

## Slide 5

Competitions and Challenges

Speech:

"Our members participated in robotics competitions and technical challenges."

---

## Slide 6

Learning Opportunities

Speech:

"Members learned programming, ROS2, electronics and artificial intelligence."

---

## Slide 7

Join the Society

Speech:

"We would love to see you at our next session."

"Scan the QR code and become part of the team."

---

# Return To Idle State

After the final slide:

Pepper says:

"Thank you for visiting."

The presentation closes.

Pepper returns to:

"Touch my head to begin."

The system waits for the next student interaction.

---

# Technologies

## Frontend

* HTML
* CSS
* JavaScript

## Pepper Features

* Head Touch Sensor
* Speech Synthesis
* Tablet Interface
* Autonomous Behaviours
* Event Handling

## Optional Future Features

* Leaderboard
* Photo Capture
* QR Code Analytics
* AI Generated Personality Profiles
* Integration with Society Website
* Membership Sign-up Form

---

# Expected Benefits

## For Students

* Fun interactive experience.
* Introduction to Robotics and AI.
* Easy access to society information.

## For Hull Robotics Society

* Increased visibility.
* Increased membership recruitment.
* Demonstration of technical capability.
* Reusable showcase project for future committees.

---

# Success Criteria

* Pepper successfully detects user interaction.
* Personality test completes without intervention.
* Personality result is generated correctly.
* QR codes are displayed correctly.
* Society showcase presentation runs automatically.
* System returns to idle mode ready for the next user.
* New members are recruited through the interaction.

```
```
