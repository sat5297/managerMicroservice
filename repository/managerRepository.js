if(process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv').config({path : `${__dirname}/../.env`});
}
const EmployeeModel = require('../models/manager');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

const getEmployeeInfo = async (body) => {
    console.log(body);
    let searchOptions = {};
    if(body.empmanagerid != null && body.empmanagerid !== ''){
        searchOptions.empManagerID = body.empmanagerid;
    }
    console.log(body, searchOptions)
    return new Promise((resolve,reject) => {
        client.connect(async err => {
            const employeeCollection = client.db("corpinfoemp").collection("corpinfoemp");
            try{
                const employee = await employeeCollection.find(searchOptions).toArray();
                console.log(employee);
                resolve(employee);
            }catch{
                reject("Error in promise")
            }
        });
    });
};

const createEmployee = async (body) => {
    const newEmployee = new EmployeeModel(body);
    console.log(newEmployee, body, "create Employee in repo");
    return new Promise((resolve,reject) => {
        client.connect(async err => {
            const employeeCollection = client.db("corpinfoemp").collection("corpinfoemp");
            try{
                employeeCollection.insertOne(newEmployee).then((res) => {
                    if(res.acknowledged){
                        resolve("Created Employee Successfully");
                    }else{
                        reject("Cannot create Employee");
                    }
                });
            }catch{
                reject("Error in promise")
            }
        });
    });
};

const deleteEmployee = async (body) => {
    let searchOptions = {};
    if(body.empID != null && body.empID !== ""){
        searchOptions.empID = body.empID;
    }
    console.log(body, searchOptions,"delete");
    return new Promise((resolve,reject) => {
        client.connect(async err => {
            const employeeCollection = client.db("corpinfoemp").collection("corpinfoemp");
            try{
                await employeeCollection.deleteOne(searchOptions).then((res) => {
                    if(res.acknowledged){
                        console.log(res, "first");
                        try{
                            resolve("Employee Deleted Successfully from Corporate Database.")
                        }catch{
                            reject("Cannot delete Employee");
                        }
                    }else{
                        reject("Cannot delete Employee");
                    }
                });
            }catch{
                reject("Error in promise")
            }
        });
    });
};

module.exports = {
    getEmployeeInfo,
    createEmployee,
    deleteEmployee
};
