const express = require("express");
const router = express.Router();
const {getMeetings ,createMeeting ,deleteMeeting} = require("../controllers/MeetingController");

router.get("/:userId", getMeetings);
router.post("/", createMeeting);
router.delete("/:id", deleteMeeting);

module.exports = router;
