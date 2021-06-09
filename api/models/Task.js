const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let taskSchema = new Schema({
    taskname: {
        type: String
    },
    // time: {
    //     type: Number
    // },
}, {
    collection: "tasks"
})

module.exports = mongoose.model('task', taskSchema);