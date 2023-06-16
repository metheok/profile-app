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
  //company
  companyType: String,
  companyRegistrationNumber: String,
  companyYearOfRegistration: Number,
  companyGst: String,
  companyLastYearTurnover: String,
  registeredAddressLine: String,

  registeredAddressCountry: String,
  registeredAddressCity: String,
  registeredAddressPin: String,
  registeredAddressState: String,
  offices: [
    {
      addressType: String,
      address: String,
      pin: String,
      number: String,
      email: String,
    },
  ],
});

module.exports = mongoose.model("Company", companySchema);
