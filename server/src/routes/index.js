const getCharById = require('../controllers/getCharById');
const { postFav, deleteFav } = require("../controllers/favorites");
const login = require('../controllers/login');
const { Router } = require('express')


const router = Router();


router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;



// const { Router } = require("express");
// const getCharById = require("../controllers/getCharById")
// const login = require("../controllers/login");
// const postFav = require("../controllers/favorites");

// const router = Router();

// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav" , postFav);
// router.delete("/fav/:id", deleteFav );


// module.exports = router;