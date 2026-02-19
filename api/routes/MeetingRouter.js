const express = require("express");
const router = express.Router();
const meetingController = require("../controllers/meetingController");

router.get("/:userId", meetingController.getMeetings);
router.post("/", meetingController.createMeeting);
router.delete("/:userId/:id", meetingController.deleteMeeting);

module.exports = router;
