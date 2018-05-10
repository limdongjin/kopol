var express = require('express');
var router = express.Router();
const models = require('./../models');

/* GET bill detail data */
router.get('/:id', function(req, res, next) {
    models.bills.findById(req.params.id)
        .then(bill_data => {
            console.log(bill_data);
            res.json( { data: bill_data } );
        })
        .catch(err => {
            console.log(err);
            res.json( { errorMsg: err } )
        });
});

module.exports = router;
