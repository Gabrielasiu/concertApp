const router = require('express').Router();
const { Concert, User, Matchup, Admin } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all concerts and JOIN with user data
    const concertData = await Concert.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const concerts = concertData.map((concert) => concert.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('login', {
      //concerts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/concert/:id', async (req, res) => {
  try {
    const concertData = await Concert.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const concert = concertData.get({ plain: true });

    res.render('concert', {
      ...concert,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Concert }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// router.get('/profile/matchup', withAuth, async (req, res) => {


//   res.render('matchup');
// })
router.get('/matchup', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const matchupData = await Matchup.findAll({

    });
console.log(matchupData)

    // Serialize data so the template can read it
    const matchups = matchupData.map((matchup) => matchup.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('matchup', {
      matchups,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//postear galeria

router.get('/gallery', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const concertData = await Concert.findAll({

    });


    // Serialize data so the template can read it
    const concerts = concertData.map((concert) => concert.get({ plain: true }));
console.log("conciertos", concerts[0])
    // Pass serialized data and session flag into template
    res.render('gallery', {
      concerts: concerts, //como lo identifoc en el handlebar
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;

