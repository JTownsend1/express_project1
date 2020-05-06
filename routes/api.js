const express = require ('express');
const router = express.Router();

// get a list of rocks from the db
router.get('/rocks', function(req, res){
    res.send({type: 'GET'});
});

// add a new rock to the db
router.post('/rocks', function(req, res){
    res.send({type: 'POST'});
});

// update a rock in the db
router.put('/rocks/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a rock from the db
router.delete('/rocks/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;