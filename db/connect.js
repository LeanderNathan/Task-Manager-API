const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const uri = ''

const connectDB = (url) => {
  return mongoose.connect(url, {})
}

module.exports = connectDB
