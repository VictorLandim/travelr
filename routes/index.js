const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('*', (req, res) =>
    res.status(404).json({ error: 'Page not found.' })
);

module.exports = router;
