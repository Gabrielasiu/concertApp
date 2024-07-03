const sequelize = require('../config/connection');
const { User, Concert, Matchup } = require('../models');

const userData = require('./userData.json');
const concertData = require('./concertData.json');
const matchupData = require('./matchupData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //logica para la matchupp data y a todos agregar user ID 


const users = await User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

for (const concert of concertData) {
  await Concert.create({
    ...concert,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });
}
for (const matchup of matchupData) {
  await Matchup.create({
    ...matchup,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });
}
  process.exit(0);
};

seedDatabase();
