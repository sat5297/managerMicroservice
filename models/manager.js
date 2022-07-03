const mongoose = require('mongoose');

const corpInfoSchema = new mongoose.Schema({
    empID : {
        type: String,
        required : true
    },
    empName : {
        type: String,
        required : true
    },
    empCell : {
        type: String,
        required : true
    },
    empLocation : {
        type: String,
        required : true
    },
    empManager : {
        type: String,
        required : true
    },
    empManagerID : {
        type: String,
        required : true
    },
    empDept : {
        type: String,
        required : true
    },
    empDeptID : {
        type: String,
        required : true
    }
});

module.exports = new mongoose.model('corpinfoemp', corpInfoSchema);