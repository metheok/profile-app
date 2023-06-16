const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { Config } = require("../../configs/config");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  const secretKey = Config.SECRET_JWT;
  try {
    jwt.verify(token, secretKey, async (err, user) => {
      if (err || !user.username) {
        return res.sendStatus(403);
      }
      const result = await User.findOne({
        username: user.username,
      });
      if (!result || result.username != user.username) {
        return res.sendStatus(403);
      }
      req.user = {
        username: result.username,
        _id: result._id.toString(),
        name: result.name,
      };
      next();
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { authenticateToken };
