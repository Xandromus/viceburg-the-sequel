# ViceBurg the Sequel

ViceBurg the Sequel is a Node and Express app, using Sequelize and deployed to Heroku, that offers a burger logging journal. It is almost identical to a previous app, ViceBurg ([ViceBurg](https://github.com/Xandromus/viceburg/)), with the primary difference being that it uses the Sequelize ORM instead of MySQL statements.


## Description

[ViceBurg](https://viceburg-sequel.herokuapp.com/)

![ViceBurg](https://github.com/Xandromus/viceburg-the-sequel/blob/master/viceburg.png)

ViceBurg is a food logging journal which focuses on burgers. Users can add various types of burgers that they'd like to eat, which then show up in the Temptation column. If users decide to 'Give In', the burger moves to the Gluttony column. From the Gluttony column, users can then choose to 'Tempt' themselves again (moving the burger back to the Temptation column), or they can 'Purge' the burger from their list entirely.


## Setup and Usage

VicebBurg can be accessed either through the Heroku deployment above or run locally through Node using the server.js file on Port 3000 and access to a database.


## Concepts Used

- Node and Express servers
- Handlebars templating
- MVC (Model-View-Controller) design pattern
- Sequelize ORM
- API endpoints
- HTML endpoints
- Node require and module exports


## Technologies Used

- HTML5/CSS3
- BootStrap
- Javascript
- jQuery
- Sequelize
- Node.js
- Express.js
- Handlebars.js
- Heroku
- JawsDB


## Future Development

Future changes would include:

1. Validation to determine if user input already exists in database

2. The ability to update burger names after they have been entered by the user

3. Appending the new/changed data to the DOM in real-time as it is entered (versus simply reloading the page to display the new/changed data)

4. The ability to create an account and customize profiles


## Node Packages Used

- dotenv
- express
- body-parser
- path
- express-handlebars
- sequelize
- mysql2


## Authors

- **Xander Rapstine** - [Xander Rapstine](https://github.com/Xandromus)