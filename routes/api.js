const express = require('express');
const router = express.Router();

const Restaurants = require('../models/restaurants');

/* GET users listing. */
router.get('/restaurants', function (req, res, next) {
  Restaurants.find()
    .then(restaurants => res.json(restaurants))
    .catch(next);
});

module.exports = router;
