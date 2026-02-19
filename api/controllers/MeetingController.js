const Meeting = require("../models/Meeting");

module.exports = {

    // GET /meeting/:userId
    getMeetings: async (req, res) => {
        try {
            const meetings = await Meeting.find({ 
                userId: req.params.userId 
            });

            res.status(200).json(meetings);

        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    // POST /meeting
    createMeeting: async (req, res) => {
        try {
            const meeting = new Meeting(req.body);
            await meeting.save();

            res.status(201).json(meeting);

        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    // DELETE /meeting/:userId/:id
    deleteMeeting: async (req, res) => {
        try {
            const meeting = await Meeting.findOneAndDelete({
                _id: req.params.id,
                userId: req.params.userId
            });

            if (!meeting) {
                return res.status(404).json({
                    message: "Meeting not found"
                });
            }

            res.status(200).json({ message: "Deleted successfully" });

        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
