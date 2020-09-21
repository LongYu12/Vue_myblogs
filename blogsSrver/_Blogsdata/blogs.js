var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/_BlogsData');

var userSchema = new Schema({
  id:{
    type:Number,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  categories:{
    type:String,
  },
  authors:{
    type:Array,
  },
  author:{
    type:String,
  },


})

module.exports = mongoose.model('Blog', userSchema)
