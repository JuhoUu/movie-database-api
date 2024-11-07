// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/getall', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/add', movieController.addMovie);
router.put('/update/:id', movieController.updateMovie);
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;
