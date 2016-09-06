const router = require ('express').Router();

router.get('/', (req, res, next) => {
  res.render('albums/index', {title: 'Albums'});
});

router.get('/new', (req, res, next) => {
  res.render('albums/new', {title: 'New Album'});
});

module.exports = router;
