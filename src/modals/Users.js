const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;