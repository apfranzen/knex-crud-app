const router = require ('express').Router();


// GET album landing page
router.get('/', (req, res, next) => {
  res.render('albums/index', {title: 'Albums'});
});

// GET new album form page
router.get('/new', (req, res, next) => {
  res.render('albums/new', {title: 'New Album'});
});

// POST a new album
router.post('/', (req, res, next) => {
  // logged out req.body to confirm the form submission can be captured
  console.log(req.body);
  res.end();
});

module.exports = router;
