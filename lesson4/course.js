const mongoose = require("mongoose");
//1
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  topics: {
    type: [String],
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "At least one topic is required",
    },
  },
  teacher: {
    type: String,
    match: /^[^0-9]*$/,
  },
  date: {
    type: Date,
    validate: {
      validator: function (v) {
        return v && v.getFullYear() <= new Date().getFullYear() + 1;
      },
      message: "The date must be no later than next year",
    },
  },
  isForBA: {
    type: Boolean,
    default: false,
  },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;