const router = require('express').Router();
let Monitoring = require('../models/monitoring.model');

router.route('/display').get((req, res) => {
    Monitoring.find()
        .then(monitoring => res.json(monitoring))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/display/today').get((req, res) => {
    Monitoring.find({}, { _id: 0, value: 1 }).limit(1).sort({$natural:-1})
        .then(monitoring => res.json(monitoring))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/display/week').get((req, res) => {
    Monitoring.aggregate([
        { 
            $match: { 
                date: { 
                    $gte: new Date(new Date().getTime() - (1000 * 3600 * 24 * 7)), 
                    $lte: new Date(),
                }, 
            }, 
        },
        { 
            $set: { 
                day: { $dayOfMonth: "$date" }
            } 
        },
        {
            $group: {
                _id: {
                    $dateFromParts: {
                       year: { $year: "$date" },
                       month: { $month: "$date" },
                       day: { $dayOfMonth: "$date" }
                    }
                },
                last: { $last: "$$ROOT" }
            }
        },
        { $replaceRoot: { newRoot: "$last" } }
    ]).sort({date: 1})
    .then(monitoring => res.json(monitoring))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const nama = req.body.nama;
    const alamat = req.body.alamat;
    const id = req.body.id;
    const value = Number(req.body.value);
    // const date = Date.parse(req.body.date);

    const newMonitoring = new Monitoring({
        nama,
        alamat,
        id,
        value,
        // date,
    });

    newMonitoring.save()
    .then(() => res.json('Monitoring added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

