const router = require('express').Router()
var ZapierController = require('./Controller/ZapierController.js');

router.post('/hook' ,ZapierController.hook);

router.delete('/unhook' , ZapierController.deleteHook);


module.exports = router