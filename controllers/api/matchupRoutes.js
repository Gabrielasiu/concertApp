const router = require('express').Router();
const { Matchup } = require('../../models');
const withAuth = require('../../utils/auth');




router.get('/', /*withAuth,*/ async (req, res) => {
  try {
    const newMatchup = await Matchup.findAll({
 
      // user_id: req.session.user_id,
    });

    res.status(200).json(newMatchup);
  } catch (err) {
    res.status(400).json(err);
  }
});

//ruta para crear el matchup 
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

router.put('/matchup', async (req, res) => {
  
  const matchupId = req.body.matchupId
  const voteType = req.body.voteType
  
  try { 
    const matchup = await Matchup.findByPk( matchupId)
    if (voteType === 'a'){
      matchup.votesA +=1;
    } else if (voteType === 'b'){
      matchup.votesB += 1;
    } 

    await matchup.save();

    res.status(200).json({message:"Vote registered successfully"});

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error updating the votes' });
  }
});

module.exports = router;
