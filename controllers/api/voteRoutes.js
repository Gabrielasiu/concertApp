const router = require('express').Router();
const { Matchup } = require('../../models');
router.post('/votes', async (req, res) => {
  try {
    const artistName = req.body.artist;
    const matchup = await Matchup.findOne({
      where: {
        [Op.or]: [
          { artistA: artistName },
          { artistB: artistName }
        ]
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});
module.exports = router;