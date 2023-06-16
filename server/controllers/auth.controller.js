const {
  hashPassword,
  generateToken,
  comparePassword,
} = require("../util/util");
const { validateUserData } = require("../util/util");

const User = require("../models/user");

class AuthController {
  //signup user

  signup = async (req, res, next) => {
    const { username, name, password } = req.body;
    if (!username || !password || !name) {
      return res.status(400).json({ message: "Arguments not provided" });
    }
    const [validatedData, err] = validateUserData({ username, password, name });
    if (err) {
      return res.status(400).json({ error: err });
    }
    try {
      const user = await User.findOne({ username });
      if (user) {
        return res.status(409).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await hashPassword(password);

      const newUser = new User({
        username,
        password: hashedPassword,
        name,
      });

      await newUser.save();
      // Generate a JWT token
      const token = generateToken({ username });
      res.json({ token });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  //login user

  login = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Arguments not provided" });
    }
    const [validatedData, err] = validateUserData({ username, password });
    if (err) {
      return res.status(400).json({ error: err });
    }
    try {
      // Find the provider in the database
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Compare the password with the stored hash
      const passwordMatch = await comparePassword(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid credentials pass" });
      }

      // Generate a JWT token

      const token = generateToken({ username });
      res.status(201).json({
        token,
        user: {
          name: user.name,
          username: user.username,
        },
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
module.exports = new AuthController();
