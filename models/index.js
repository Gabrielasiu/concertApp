const User = require('./User');
const Concert = require('./Concert');
const Matchup = require('./Matchup');

User.hasMany(Concert, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Concert.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Concert, Matchup };
