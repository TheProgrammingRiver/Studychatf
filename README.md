# StudyChat

StudyChat is an intuitive platform that allows users to create, join, and collaborate in study rooms. Within these rooms, participants can chat and discuss academic topics, making learning more interactive and social.

## Tools and Technologies Used

- **Frontend**:
  - Angular: Frontend framework for building SPA.
  - TypeScript: Primary language for Angular development.
  - HTML & CSS: Styling and structuring the web pages.
  
## Installation

To run StudyChat on your local machine:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `ng serve`.

> Note: Ensure the backend server is running to fully utilize the application.

## Planning and Documentation

-**Frontend Development:**
Design and develop the registration and login pages.
Create the main dashboard to display available study rooms.
Implement the chat interface for the study rooms.

## Backend Repository

The backend API for StudyChat can be found [here](https://github.com/TheProgrammingRiver/StudyChat/tree/main).

## Approach

I started with the vision to make studying more collaborative. The initial phase involved gathering requirements and planning the features. The chat functionality was the core.

Angular's reactive nature helped in providing real-time chat capabilities. On the backend, Spring Boot provided the robustness and scalability I needed. 

A challenge I faced was ensuring data integrity, especially with messages and their association with rooms and users. But with thorough testing and debugging, I managed to ensure a smooth user experience.

## Challenges and Hurdles

During the development process, we encountered a few challenges:

1. **Data Integrity**: Ensuring that messages in the database were correctly associated with a room and a sender.
2. **Real-time Updates**: Making sure the UI updates in real-time as messages are sent without using websockets was a challenge but was accomplished through periodic refreshing.


