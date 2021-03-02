# ReactExpress_RecruitmentApp

## Get started
Start by cloning this repository from the main branch. Open a terminal inside the root project folder and run ```npm install```.
Thereafter move the terminal inside the ``client`` folder and run ```npm install``` and ```npm run build```.
Move the terminal back to the root folder and run ```npm start```.
The app is now up and running in ```http://localhost:8080/```.

## deployment
To deploy the app to heroku start opening a terminal inside the ``client`` folder and run ```npm run build```.
Thereafter logg in to heroku and into the current project called ``react-express-applicationapp``.
Press the ```Settings``` tab and make sure all evironement variables in the projects ``.env`` file are present in heroku's Config Vars. Thereafter press the ```Deploy``` tab in heroku, scroll down and press the deploy button. 
The app should now be hosted on the domain [https://react-express-applicationapp.herokuapp.com/](https://react-express-applicationapp.herokuapp.com/).

## Usage
Regular clients may signup or login to an existing account. When logged in the client can create an application and submit it. An admin may later login and search through all applications and sort them by skills. Each application has a status which can be viewed and changed by an admin.
