const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  companyName: String,
  industry: String,
  description: String,
  website: String,
  employeeStrength: Number,
  contactDetails: [
    {
      title: String,
      name: String,
      number: String,
      email: String,
      designation: String,
    },
  ],
  companyInfo: {
    type: String,
    registrationNumber: String,
    yearOfRegistration: Number,
    gst: String,
    lastYearTurnover: String,
  },
  registeredAddress: {
    line1: String,
    line2: String,
    country: String,
    city: String,
    pin: String,
    state: String,
  },
  offices: [
    {
      addressType: String,
      line1: String,
      line2: String,
      country: String,
      city: String,
      pin: String,
      state: String,
      number: String,
      email: String,
    },
  ],
});

module.exports = mongoose.model("Company", companySchema);
