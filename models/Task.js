const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Oson', 'O\'rta', 'Qiyin'],
    default: 'O\'rta'
  },
  points: {
    type: Number,
    default: 10
  },
  dueDate: Date,
  submittedBy: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    submission: String,
    score: Number,
    feedback: String,
    submittedAt: Date
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema);