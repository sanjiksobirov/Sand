const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  subject: {
    type: String,
    enum: ['Tarix', 'Geografiya', 'Adabiyot', 'Huquq', 'Kimyo'],
    required: true,
    unique: true
  },
  title: String,
  description: String,
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson'
  }],
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  image: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', CourseSchema);