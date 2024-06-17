const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await User.create({ username, email, password: hashedPassword });
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).send({ error: 'Invalid login credentials' });
        }
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/me', auth, (req, res) => {
    res.send(req.user);
});

module.exports = router;
