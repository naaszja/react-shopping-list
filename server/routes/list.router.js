const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.put('/update/:id', (req, res) => {
    let purchasedChange = req.body.purchasedChange;
    let itemId = req.params.id;
    console.log(`Updating purchased to ${purchasedChange} at id:`, itemId);

    const sqlText = `UPDATE "shopping_list" SET "purchased" = $1
                     WHERE "id" = $2;`;

    pool.query(sqlText, [purchasedChange, itemId]).then(result => {
        console.log(`Updated purchased at id: ${itemId} to ${purchasedChange} successfully`)
        res.sendStatus(200);
    }).catch(err => {
        console.log(`Error making query ${sqlText}`, err);
        res.sendStatus(500);
    });
});

router.put('/reset', (req, res) => {
    console.log(`Updating purchased to 'false' for all items`);

    const sqlText = `UPDATE "shopping_list" SET "purchased" = 'false';`;

    pool.query(sqlText).then(result => {
        console.log(`Updated purchased to false for all items successfully`)
        res.sendStatus(200);
    }).catch(err => {
        console.log(`Error making query ${sqlText}`, err);
        res.sendStatus(500);
    });
});

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
});

router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM "shopping_list" ORDER BY "name" ASC, "purchased";`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        });
});// end GET route

router.delete('/deleteid/:id', (req, res) => {
    let id = req.params.id
    console.log('Deleting item number', id);

    let queryText = `DELETE FROM "shopping_list"
                    WHERE "id" = $1`
    pool.query(queryText, [id]).then((results) => {
        console.log(results.rows);
        res.sendStatus(204)
    })
})

router.delete('/clear', (req, res) => {
    console.log('Clearing list');

    let queryText = `DELETE FROM "shopping_list";`;

    pool.query(queryText).then(() => {
        res.sendStatus(204);
    }).catch(err => {
        console.log(`Error making database query ${queryText}`, err);
            res.sendStatus(500);
    });
});

module.exports = router;