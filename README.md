# SWE_6633_Project_Planning
Project management tool to fulfill the requirements of the SWE-6633 Software Project Planning and Management group project. 

The project consists of a project management tool that can allow the user to keep track of projects, team members, requirements, risks, and contribution hours. A more full description of the tool and its intended capabilities may be found in the 

## Installation Instructions
The project requires the following Software:
1. ReactJS and dependencies: https://legacy.reactjs.org/docs/getting-started.html
2. Appwrite: https://appwrite.io/
3. Docker Desktop: https://www.docker.com/products/docker-desktop/ 

Navigate to the my-app directory and run `npm install` to install all of the required dependencies for the project such as react-bootstrap, bootstrap, and react-scripts

## Instructions to Run
Within the my-app directory, run `npm start` to start the React frontend

The backend app-write is currently not implemented, but if it were, running the container via the Docker Desktop application or the instructions contained in the /docs subdirectory would allow the user to start the backend. 

## Notes on the state of the program
### Frontend
Due to a lack of experience with web development and the React framework, the development team was only able to implement the UI proposed by the wireframes in /docs/wireframes with a basic routing scheme. 

The Project Edit page allows users to record the various team members, requirements, and risks for the project, but the data is not saved in a backend and is thus not stateful. 

The Hour Tracking functionality in the Hour Tracking page is similarly implemented via the frontend in a non-stateful manner, but as can be seen by many of the dropdowns, the project data is not saved and served through the dropdown selections or the hour chart.

The application's current capabilities do provide a good idea of how the application should look and function when fully implemented. Thus, the application serves as a good initial protoype.

### Backend
The backend was not implemented beyond the most basic instantiation, as the development team had no experience with NoSQL databases and the App-write service itself. Time overruns on the frontend side almost completely eliminated time for backend development, leaving the backend unfinished and nearly unimplemented.

## Documentation
Please find the project documentation and images in the /docs directory.