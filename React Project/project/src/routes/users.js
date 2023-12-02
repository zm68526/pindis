const express = require('express');
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
//const auth = require("../middleware/auth");
const bodyParser = require('body-parser')
const cors = require('cors');
const User = require('../models/User');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.use(cors({ origin: true, credentials: 'http://localhost:3000' }));
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


router.post('/signup', async (req,res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "Please enter all the fields" });
        }
        if (password.length < 6) {
            return res.status(401).json({ error: "Password should be at least 6 characters" });
        }
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(402).json({ error: "User with the same username already exists" });
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({ username, password: hashedPassword });

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        if(!username || !password) {
            return res.status(400).json({ error: "Please enter all the fields" });
        }

        const user = await User.findOne({ username });
        if(!user) {
            return res.status(401).send({ error: "User with this email does not exist" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if(!isMatch) {
            return res.status(403).send({ error: "Incorrect password" });
        }
        const token = jwt.sign({ id: user._id }, "passwordKey");
        res.json({ token, user: { id: user._id, username: user.name }});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', (req, res) => {
    User.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json(err));
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json("Connection failed"));
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    User.findByIdAndUpdate(id, body)
    .then((item) => res.json({msg: 'Updated successfully'}))
    .catch((err) => res.status(404).json(err));
});

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then((item) => res.json({msg: 'Item entry deleted successfully'}))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;