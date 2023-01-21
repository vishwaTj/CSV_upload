const express = require('express');
const router = express.Router();
const Homecontroller = require('../controllers/Home_controller');
console.log('router loaded');

router.get('/',Homecontroller.Home);
router.post('/',Homecontroller.fileupload);


module.exports = router;