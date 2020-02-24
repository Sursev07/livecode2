const router = require('express').Router();
const movie = require('../controllers/movieController')

router.get('/', movie.findAll)
router.get('/:id', movie.findOne)
router.put('/:id', movie.update)

module.exports = router;