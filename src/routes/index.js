const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');
const perfController = require('../controllers/performanceController'); // ✅ ADD THIS

router.post('/transactions:parse', controller.parseTransactions);
router.post('/transactions:validator', controller.validateTransactions);
router.post('/transactions:filter', controller.filterTransactions);
router.post('/returns:nps', controller.calculateNPS);
router.post('/returns:index', controller.calculateIndex);

router.get('/performance', perfController.getPerformance);

module.exports = router;