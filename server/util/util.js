const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Config } = require("../../configs/config");

const generateToken = (user) => {
  return jwt.sign(user, Config.SECRET_JWT);
};

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

const comparePassword = (a, b) => {
  return bcrypt.compare(a, b);
};

const validateCompanyData = (data) => {
  if (data.companyName && typeof data.companyName != "string") {
    return ["type error", null];
  }
  return [data, null];
};
const validateUserData = (data) => {
  if (
    typeof data.username != "string" ||
    typeof data.password != "string" ||
    (data.name && typeof data.name != "string")
  ) {
    return ["type error", null];
  }
  return [data, null];
};
module.exports = {
  hashPassword,
  generateToken,
  comparePassword,
  validateCompanyData,
  validateUserData,
};
