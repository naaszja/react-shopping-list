const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.put('/reset/:id', (req, res) => {
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

module.exports = router;