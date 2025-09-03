import bcrypt from "bcryptjs";
import userModel from "../Models/userModel.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      ...req.body,
      password: hashPassword,
    });
    if (user) {
      return res.status(201).json({
        status: "success",
        message: "signed up successfully",
        user,
      });
    } else {
      // return res.status(404).json({
      //     status:"erroe",
      //     message:"unable to sign up"
      // })
    }
  } catch (error) {
    console.log(error);
  }
};

export const signInHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(201).json({
        status: "success",
        message: "user not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        status: "error",
        message: "Email or password incorrect",
      });
    }
    const generateToken = await jwt.sign(
      { userId: user.id, email },
      process.env.JSONWEBTOKEN_SECRET,
      { expiresIn: process.env.JSONWEBTOKEN_EXP }
    );
    return res.status(201).json({
        status:"success",
        message:"login successfully",
        generateToken
    })
  } catch (error) {
    console.log(error);
  }
};
