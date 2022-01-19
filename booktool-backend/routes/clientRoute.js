const express = require('express');
const clientController = require('../controllers/clientController');
const authController = require('../controllers/authController');
const router = express.Router();

router.use(authController.protectRoute);

router.get('/', clientController.getClients);
router.get('/:id', clientController.getClient);
router.post('/', clientController.createClient);
router.patch('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
