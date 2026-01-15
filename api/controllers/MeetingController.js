const Meeting = require("../models/Meeting");

module.exports = {

    getMeetings: async (req, res) => {
        try {
            const meetings = await Meeting.find({ userId: req.params.userId });
            res.json(meetings);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    createMeeting: async (req, res) => {
        const { title, description, date, time, location, userId } = req.body;
        if (!title || !date || !time || !userId)
            return res.status(400).json({ message: "Missing fields" });

        try {
            const meeting = new Meeting({ title, description, date, time, location, userId });
            await meeting.save();
            res.status(201).json(meeting);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    deleteMeeting: async (req, res) => {
        try {
            await Meeting.findByIdAndDelete(req.params.id);
            res.json({ message: "Deleted" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
