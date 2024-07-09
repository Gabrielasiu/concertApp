## PROJECT 2: Interactive Full-Stack Application - ConcertMatchup

The primary goal of this application is to enable event organizers to gauge public interest in various artists through polls. By collecting and analyzing this data, organizers can tailor their event lineups to match audience preferences, ensuring higher satisfaction and attendance.

## User story

AS AN event organizer,<br>
I WANT a polling application thar bridges the gap between organizers and audience,<br>
SO THAT I can analyze audience preferences, ensuring that events resonate with my intended audiences.

## Acceptance criteria

GIVEN a poll application
* WHEN I load the website,<br>
THEN I am presented with a secure login and registration system to ensure that poll responses are authentic and prevent multiple votes from the same user in the same matchup.
* WHEN I login as admin,<br>
THEN I see displayed a gallery of artists.
* WHEN choose two artist from the gallery,<br>
THEN I am able to create a new Matchup.
* WHEN I create a new Matchup,<br>
THEN I am sent to another page where the ongoing matchups are shown, along with the votes those already have.
* WHEN I register as a regular votant,<br>
THEN I am presented the page with all the ongoing matchups.
* WHEN I vote for an artist in one of the matchups,<br>
THEN I get a confirmation modal to assure that my vote is correct.
* WHEN I try to send a second vote in a matchup,<br>
THEN I get an alert modal mentioning that I already have voted and that vote will not proceed.

## Technologies used

* Application uses a Node.js and Express.js back end and uses both GET and POST routes for retrieving and adding new data.
* Application has a folder structure that meets the MVC paradigm and uses Handlebars.js as the template engine.
* Application is backed by a PostgreSQL database with a Sequelize ORM and protects API keys and sensitive information with environment variables.
* Application includes user authentication (express-session and cookies).
* Application uses npm Morgan which simplifies the process of logging HTTP requests in Node. js applications.

## Go to our project

To visit and review our project, [click here](https://github.com/Gabrielasiu/concertApp/)

## Visual reference of project
The following image demonstrates the app's appearance:

![short technical description of the app)](./assets/challenge_appReference.gif)

![](./assets/challenge_appReference.gif)

## License
![GitHub](https://img.shields.io/github/license/VanZittle/V-logoGenerator?style=for-the-badge)<br> Go to license [here](https://github.com/VanZittle/V-logoGenerator/blob/main/LICENSE)
  
