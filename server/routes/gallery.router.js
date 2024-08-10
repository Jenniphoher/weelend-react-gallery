const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const likes = req.body.likes;
  const id = req.params.id;
  
  const sqlText = `UPDATE "gallery"
                    SET "likes" = $1
                    WHERE "id" = $2;`

  const sqlValue = [likes, id]

  pool.query(sqlText, sqlValue)
  .then((result) => {
    console.log('Likes work!', result.rows);
    res.sendStatus(200);
  }) .catch((err) => {
    console.log('Server error in updating likes:', err);
    res.sendStatus(500);
  })
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const sqlText = `SELECT * FROM "gallery"
                  ORDER BY "id";`

  pool.query(sqlText)
  .then((result) => {
    res.send(result.rows);
  }) 
  .catch((err) => {
    console.log('Server cannot get data:', err);
    res.sendStatus(500);
  })
});

module.exports = router;
