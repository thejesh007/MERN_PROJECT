
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const Schema = mongoose.Schema;


//create schema for user
const UserSchema = new Schema({
  credentials: {
    username: {
      type: String,
      required: [true, 'username text field is required'],

    },
    password: {
      type: String,
      required: [true, 'username text field is required']
    }

  },

  details: {
    firstName: {
      type: String,
      required: [true, 'firstName text field is required'],

    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: [true, 'lastName text field is required'],

    },
    email: {
      type: String,
      required: [true, 'email text field is required'],

    },
    mobileNo: {
      type: String,
      required: [true, 'mobileNo text field is required'],

    },
    address: {
      type: String,
      required: [true, ' address text field is required'],

    }
  }

});

//create model for users

const User = mongoose.model('users', UserSchema);


module.exports = User;