const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Page d'accueil")
});
router.get('/about', (req, res) => {
    res.render('about')
});
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
    })
});

module.exports = router;