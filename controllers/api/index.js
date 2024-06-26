const router = require('express').Router();
const userRoutes = require('./userRoutes');
const concertRoutes = require('./concertRoutes');

router.use('/users', userRoutes);
router.use('/concert', concertRoutes);

module.exports = router;
