const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");

exports.home = (req, res) => {
  res.send("<h1>Home page</h1>");
};

exports.registerUser = async (req, res) => {
  const pattern = /[\d\W_]+/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  try {
    //hashing password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const { name, email, password } = {
      ...req.body,
      password: hashedPassword,
    };

    //Check for empty values
    if (!name || !email || !password) {
      throw new Error("Name and Email and password is required");
    }

    //check if any number and any special character is present in name
    if (pattern.test(name) == true) {
      throw new Error("Name can't have numbers or any special characters");
    }

    //check if the email is valid
    if (emailRegex.test(email) == false) {
      throw new Error("Email is not valid");
    }

    //check for length of password is more than 8 chars and a special character is present
    function hasSepcialCharacter(pwd) {
      if (specialCharacterRegex.test(pwd)) {
        return true;
      }

      return false;
    }

    if (password.length < 8 || hasSepcialCharacter(password) === false) {
      throw new Error(
        "Password must have atleast 8 characters and a special character"
      );
    }

    //check for user existence
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    //insert a new user
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      msg: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  const emailFromRequest = req.body.email;
  const user = await User.findOne({ email: emailFromRequest });

  if (user == null) {
    return res.status(400).json({
      msg: "User not found",
    });
  }
  //comparing password
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(201).json({
        msg: "Login Successful",
      });
    } else {
      res.status(500).json({
        msg: "Authentication failed",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "please verify the username and password",
    });
  }
};
