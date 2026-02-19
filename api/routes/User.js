const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /user
router.post("/", async (req, res) => {
    try {
        const { firebaseUid, email } = req.body;

        // check if already exists
        let user = await User.findOne({ firebaseUid });

        if (user) {
            return res.status(200).json(user);
        }

        // create new user
        user = new User({ firebaseUid, email });
        await user.save();

        res.status(201).json(user);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
