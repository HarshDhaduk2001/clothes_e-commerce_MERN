const User = required("../models/userModel");
const bcrypt = required("bcrypt");
const jwtProvider = require("../config/jwtProvider");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exist with email :", email);
    }
    password = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, password });
    console.log(user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId).populate("address");
    if (!user) {
      throw new Error("User not found with id :", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with email :", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found with id :", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  findUserByEmail,
  getUserProfileByToken,
  getAllUsers,
};
