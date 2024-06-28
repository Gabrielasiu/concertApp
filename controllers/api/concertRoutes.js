const router = require('express').Router();
const { Concert } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newConcert = await Concert.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newConcert);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const concertData = await Concert.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!concertData) {
      res.status(404).json({ message: 'No concert found with this id!' });
      return;
    }

    res.status(200).json(concertData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
