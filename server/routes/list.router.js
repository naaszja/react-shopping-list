const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.post('/', (req, res) => {
    const newItem = req.body;
    const sqlText = `INSERT INTO "shopping_list" ("name" , "quantity" , "unit") VALUES ($1 , $2 , $3)`;
    pool.query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
    })
    
router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM "shopping_list"`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        });
});// end GET route

module.exports = router;