const router = require('express').Router();
const { Matchup } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', /*withAuth,*/ async (req, res) => {
  try {
    const newMatchup = await Matchup.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newMatchup);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const matchupData = await Matchup.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!matchupData) {
      res.status(404).json({ message: 'No concert found with this id!' });
      return;
    }

    res.status(200).json(matchupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
