const router = require('express').Router();
const rate = require('../controllers/rateController')

router.post('/:movieId', rate.create)
router.delete('/:movieId', rate.delete)

module.exports = router;