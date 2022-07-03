const express = require('express');
const router = express.Router();
const managerController = require('../controllers/managerController');

router.route('/viewEmployee')
        .get(managerController.getEmployeeInfo)
        .post(managerController.getEmployeeInfo)
        
router.route('/addEmployee')
        .post(managerController.createEmployee)

router.route('/delete')
        .delete(managerController.deleteEmployee)
        
module.exports = router;