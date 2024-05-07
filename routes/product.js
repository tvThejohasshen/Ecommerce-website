const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send("All products");
});

router.get('/add-product', function(req, res) {
    res.send('Add product');
});

// Export the router
module.exports = router;
