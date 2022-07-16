const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

router.route('/viewEmployee')
        .post(managerController.getEmployeeInfo)
        
router.route('/addEmployee')
        .post(managerController.createEmployee)

router.route('/delete')
        .post(managerController.deleteEmployee)
        
module.exports = router;