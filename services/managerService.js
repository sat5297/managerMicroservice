const managerRepository = require('../repository/managerRepository');

const getEmployeeInfoService = (body) => {
    let employee = managerRepository.getEmployeeInfo(body);
    return employee;
};

const createEmployeeService = (body) => {
    let createEmployee = managerRepository.createEmployee(body);
    return createEmployee;
};

const deleteEmployee = (body) => {
    let emp = managerRepository.deleteEmployee(body);
    return emp;
};

module.exports = {
    getEmployeeInfoService,
    createEmployeeService,
    deleteEmployee
};