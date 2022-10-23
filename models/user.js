const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
//const { JWT_SECRET } = require("../config/keys");
const JWT_SECRET = "ZEHORIT";

// user object schema
/**
 * {
    "fName": "Zehorit",
    "lName": "Cohen",
    "_id": "123456789",
    "address": {
        "city": "Tel Aviv",
        "street": "Habima",
        "houseNumber": "1"
    },
    "dateOfBirth": "1999-01-01",
    "telephone":"032659874",
    "phone":"0549219058",
    "firstVaccination": {
        "date": "2021-01-01",
        "vaccine": "Pfizer",
    }
    "secondVaccination": {
        "date": "2021-01-01",
        "vaccine": "Pfizer",
    }
    "thirdVaccination": {
        "date": "2021-01-01",
        "vaccine": "Pfizer",
    }
    "fourthVaccination": {
        "date": "2021-01-01",
        "vaccine": "Pfizer",
    }
    "positiveTest": "2021-01-01",
    "recovery": "2021-01-01",
    }
    "image":"",
  }
 */

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  _id: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 9,
  },
  address: {
    city: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    street: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    houseNumber: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 10,
    },
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 9,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  // vaccinations: {
  //   type: [{
  //       date: {
  //         type: Date,
  //         required: true,
  //       },
  //       vaccine: {
  //         type: String,
  //         required: true
  //       }
  //     }],
  //   required: false,
  // },
  firstVaccination: {
    date: {
      type: Date,
      required: true,
    },
    vaccine: {
      type: String,
      required: true
    },
  },
  secondVaccination: {
    date: {
      type: Date,
      required: true,
    },
    vaccine: {
      type: String,
      required: true
    },
  },
  thirdVaccination: {
    date: {
      type: Date,
      required: true,
    },
    vaccine: {
      type: String,
      required: true
    },
  },
  fourthVaccination: {
    date: {
      type: Date,
      required: true,
    },
    vaccine: {
      type: String,
      required: true
    },
  },
  positiveTest: {
    type: Date,
    required: true,
  },
  recovery: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    default: 'https://www.freeiconspng.com/uploads/no-image-icon-4.png',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


const User = new mongoose.model("users", userSchema);

const validateUser = {
  register: Joi.object().keys({
    Fname: Joi.string().min(2).max(50).required(),
    Lname: Joi.string().min(2).max(50).required(),
    _id: Joi.string().min(9).max(9).required(),
    Address: Joi.object().keys({
      City: Joi.string().min(2).max(50).required(),
      Street: Joi.string().min(2).max(50).required(),
      HouseNumber: Joi.string().min(1).max(10).required(),
    }),
    dateOfBirth: Joi.date().required(),
    telephone: Joi.string().min(9).max(9).required(),
    phone: Joi.string().min(10).max(10).required(),
    // vaccinations: Joi.array().items(
    //   Joi.object({
    //     date: Joi.date().required(),
    //     vaccine: Joi.string().required()
    // })
    // ).min(1).max(4).required(),
    firstVaccination: Joi.object().keys({
      date: Joi.date(),
      vaccine: Joi.string(),
    }),
    secondVaccination: Joi.object().keys({
      date: Joi.date(),
      vaccine: Joi.string(),
    }),
    thirdVaccination: Joi.object().keys({
      date: Joi.date(),
      vaccine: Joi.string(),
    }),
    fourthVaccination: Joi.object().keys({
      date: Joi.date(),
      vaccine: Joi.string(),
    }),
    positiveTest: Joi.date(),
    recovery: Joi.date(),
    image: Joi.string(),
  }),
}
exports.validateUser = validateUser;
exports.User = User;

/*
"vaccinations": [
    {
        "date": "2021-01-01",
        "vaccine": "Pfizer",
    },
*/
