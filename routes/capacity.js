var express = require('express');
var router = express.Router();
var CapacityHandler = require('../handlers/capacity');

module.exports = function (models) {
    var handler = new CapacityHandler(models);

    router.get('/:viewType', handler.getForType);
    router.post('/', handler.create);
    router.post('/create', handler.createNextMonth);
    router.patch('/', handler.putchBulk);
    router.patch('/:id', handler.putchModel);
    router.delete('/:id', handler.remove);

    return router;
};