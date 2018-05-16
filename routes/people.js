let express = require('express');
let router = express.Router();
const models = require('./../models');

router.get('/:id', (req, res) => {
    models.people.findById(req.params.id)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
});

router.get('/', (req, res) => {
    let condition = {};

    condition.where = {};

    if (req.query.name) {
        condition.where.name = {$like: `%${ req.query.name }%`};
    }

    if (req.query.res_type === "all" && !(parseInt(req.query.page))) {
        condition.limit = 15;
        if (parseInt(req.query.per_page)) condition.limit = parseInt(req.query.per_page);
    } else if (req.query.res_type === "all" && parseInt(req.query.page)) {
        condition.limit = 15;
        if (parseInt(req.query.per_page)) condition.limit = parseInt(req.query.per_page);

        condition.offset = condition.limit * (parseInt(req.query.page) - 1);
    } else {
        condition.attributes = ['id'];
    }

    if (req.query.order === "desc") {
        condition.order = [['id', 'DESC']]
    }

    models.people.findAndCountAll(condition)
        .then(result => {
            res.json({
                description: "20대 국회의원 목록",
                total: result.count,
                data: result.rows
            });
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = router;