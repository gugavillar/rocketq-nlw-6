const Database = require('../db/config');

module.exports = {
    async create(req, res) {
        const db = await Database();
        const pass = req.body.password;
        let roomId;
        let isRoom = true;
        while (isRoom) {
            for (let i = 0; i < 6; i++) {
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString();
            }
            const roomExtistIds = await db.all(`SELECT id FROM rooms`);
            isRoom = roomExtistIds.some(roomExtistId => roomExtistId === roomId);
            if (!isRoom) {
                await db.run(`INSERT INTO rooms (id, pass) VALUES (${parseInt(roomId)}, '${pass}')`);
            }
        }

        await db.close();

        res.redirect(`/room/${roomId}`);
    },
    async open(req, res) {
        const db = await Database();
        const roomId = req.params.room;
        const isRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);
        if (isRoom) {
            const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0`);
            const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1`);
            console.log(questions);
            let isNoQuestions;
            if (questions.length == 0) {
                if (questionsRead.length == 0) {
                    isNoQuestions = true;
                }
            }
            res.render('room', { roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions });
        } else {
            res.render('roomincorrect');
        }
    },
    async enter(req, res) {
        const db = await Database();
        const roomId = req.body.roomId;
        const isRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);
        if (isRoom) {
            res.redirect(`/room/${roomId}`);
        } else {
            res.render('roomincorrect');
        }
    }
};