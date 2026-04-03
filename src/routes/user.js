const express = require('express');
const router = express.Router();

// POST /user - Accepts {name, email}; responds "Hello, [name]!"
router.post('/', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send('Missing name or email');
    }
    res.send(`Hello, ${name}!`);
});

// GET /user/:id - "User [id] profile"
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`User ${id} profile`);
});

module.exports = router;