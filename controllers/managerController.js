const managerService = require('../services/managerService');

const getEmployeeInfo = async (req,res) => {
    const employee = await managerService.getEmployeeInfoService(req.body);
    res.send(employee);
};

const createEmployee = async (req,res) => {
    try{
        let createEmployee = await managerService.createEmployeeService(req.body);
        console.log(createEmployee);
        res.send(createEmployee);
    }
    catch(err){
        res.send("Error");
        console.log(err);
    }
};

const deleteEmployee = async (req,res) => {
    let emp = await managerService.deleteEmployee(req.body);
    res.send(emp);
};

module.exports = {
    getEmployeeInfo,
    createEmployee,
    deleteEmployee
};