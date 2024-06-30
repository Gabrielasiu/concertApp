const router = require('express').Router();
const userRoutes = require('./userRoutes');
const concertRoutes = require('./concertRoutes');
const matchupRoutes = require('./matchupRoutes');

router.use('/users', userRoutes);
router.use('/concert', concertRoutes);
router.use('/matchup', matchupRoutes);


module.exports = router;
