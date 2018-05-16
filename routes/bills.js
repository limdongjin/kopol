let express = require('express');
let router = express.Router();
const models = require('./../models');

/*
GET /bills/:id
id는 의안 번호를 의미함.
*/
/* 20대 국회 법안의 상세 정보를 보냄 */
router.get('/:id', function (req, res) {
    models.bills.findById(req.params.id)
        .then(bill_data => {
            console.log(bill_data);
            models.simdata.findAll({ where: {
                serial: bill_data.serial
                }})
                .then(simdatas =>{
                    models.footchairs.findAndCountAll({ where: {  serial: bill_data.serial } })
                        .then( footchairs => {
                            res.json({
                                description: req.params.id + " 법안의 상세 정보입니다",
                                bill_description: bill_data,
                                bill_simdatas: simdatas,
                                bill_footchairs: footchairs
                            });
                        });
                });
        })
        .catch(err => {
            console.log(err);
            res.json( { errorMsg: err } )
        });
});


/*
GET /bills           : 20대 국회의 법안의 모든 목록을 보냄.
GET /bills?###

Query Parameters
 | name        | Description
 | ---------------------------------
 | query       | 질의할 검색어
 |             |
 | ---------------------------------
 | res_type    | "all" => 모든 칼럼을 포함하여 응답으로 보내줌
 |             | default: id 칼럼만 보내줌
 | ---------------------------------
 | search_type | "title"         => title   칼럼에 LIKE Search
 |             | "summary"       => summary 칼럼에 LIKE Search
 |             | "assos"         => assos   칼럼에 LIKE Search
 |             | "title_summary" => title, summary 칼럼에 LIKE Search
 |             | default         => title, summary, assos 칼럼에 LIKE Search
 | ----------------------------------
 | page        |
 |             | if   res_type is "all". default => 1
 |             | else, default => -1 ( response AllData )
 | ----------------------------------
 | per_page    | default => 15
 | ----------------------------------
 | order       | "asc"   => asc  id
 |             | "desc"  => desc id
 |             | default => desc id
 | -----------------------------------
 | main_foot   | 대표발의자로 검색
 --------------------------------------
*/

router.get('/', function (req, res) {
    let condition = { };

    condition.where = req.query.main_foot ? { main_footchair: { $like: `%${ req.query.main_foot }%` }} : {};

    if(req.query.query && req.query.seach_type === "title_summary"){
        condition.where.$or = [
            {
                title: { $like: `%${  req.query.query }%` }
            },
            {
                summary: { $like: `%${req.query.query }%` }
            }
        ]
    }else if(req.query.query && req.query.search_type === "title"){
        condition.where.title = { $like: `%${ req.query.query }%` };
    }else if(req.query.query && req.query.search_type === "summary"){
        condition.where.summary = { $like: `%${ req.query.query }%` };
    }else if(req.query.query && req.query.search_type === "assos"){
        condition.where.assos = { $like: `%${ req.query.query }%` };
    }else if(req.query.query){
        condition.where.$or = [
            {
                title: { $like: `%${  req.query.query }%` }
            },
            {
                summary: { $like: `%${req.query.query }%` }
            },
            {
                assos: { $like: `%${  req.query.query }%` }
            }
        ];
    }

    if(req.query.res_type === "all" && !(parseInt(req.query.page))){
        condition.limit = 15;
        if(parseInt(req.query.per_page)) condition.limit = parseInt(req.query.per_page);
    }else if(req.query.res_type === "all" && parseInt(req.query.page)){
        condition.limit = 15;
        if(parseInt(req.query.per_page)) condition.limit = parseInt(req.query.per_page);

        condition.offset = condition.limit * (parseInt(req.query.page) -  1);
    }else{
        condition.attributes = ['id'];
    }

    if(req.query.order === "desc") {
        condition.order = [['id', 'DESC']]
    }

    console.log(condition);

    models.bills.findAndCountAll(condition)
           .then(result => {
               res.json({
                   description: "20대 국회의 법안 목록입니다.",
                   total: result.count,
                   page: parseInt(req.query.page) ? parseInt(req.query.page) : 1,
                   data: result.rows,
               });
           })
           .catch(err => {
              console.log(err);
              res.json({ error: "error" });
           });
});

module.exports = router;
