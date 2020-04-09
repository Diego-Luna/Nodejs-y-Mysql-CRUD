const express = require('express');

const router = express.Router();

const customersController =  require('../controllers/customersController');

router.get('/', customersController.list );
router.post('/add', customersController.save);
router.get('/delete/:id', customersController.delete);

// para editar algo mandado a la base de datos
router.get('/update/:id', customersController.edit);
router.post('/update/:id', customersController.update);




module.exports = router;