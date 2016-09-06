const router = require ('express').Router();
const knex = require('../db/knex');
const genres = require('../genres.json');

function Albums() { return knex('albums'); }


// GET album landing page
router.get('/', (req, res, next) => {
  Albums().select().then(records => {
    res.render('albums/index', {
      title: 'Albums',
      albums: records
    });
  });
});

// GET new album form page
router.get('/new', (req, res, next) => {
  res.render('albums/new', {title: 'New Album', genres: genres});
});

// POST a new album
router.post('/', (req, res, next) => {
  let newAlbum = {
    artist: req.body.artist,
    name: req.body.name,
    genre: req.body.genre,
    stars: parseInt(req.body.stars),
    explicit: Boolean(req.body.explicit)
  };
  // logged out req.body to confirm the form submission can be captured
  // console.log(req.body);
  // res.end();
  Albums().insert( newAlbum )
  .then(() => {
    res.redirect('/albums');
  });
});


module.exports = router;
