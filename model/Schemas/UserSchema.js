const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    fullName: {
            type: String,
            required: true,
          }, 
    email:{
            type: String,
            required: true,
          },  
    phoneNumber: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
      },
    state:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    zipCode:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    
});

const Users = mongoose.model("User", UserSchema);

module.exports = {Users};