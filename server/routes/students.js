let express     = require('express');
let models      = require('../models');

let router      = express.Router();
let Student     = models.students;


router.get('/', (req, res) => {
    res.status(200).send("Students endpoints begin here!");
});

router.get('/get', (req, res) => {
    Student.findAll({

    }).then((data) => {
        res.status(200).json({"success": true, "data": data})
    }).catch((err) => {
        console.log(err);
        res.status(404).json({"success": false, "message": "404 Not Found"})
    })
});

router.post('/create', (req, res) => {
    console.log(req.body);
    Student.create({
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade
    }).then((data) => {
        res.status(200).json({"success": true, "data": data})
    }).catch((err) => {
        console.log(err);
        res.status(404).json({"success": false, "message": "404 Not Found"})
    })
})

router.post('/delete', (req, res) => {
    Student.destroy({
        
    })
})


module.exports = router;