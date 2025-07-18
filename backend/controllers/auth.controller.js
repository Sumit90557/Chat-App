import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookies from "../utils/GenerateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

   // use avatars.dicebear.com
const boyProfilePic = `https://api.dicebear.com/7.x/adventurer/png?seed=${username}`;
const girlProfilePic = `https://api.dicebear.com/7.x/fun-emoji/png?seed=${username}`;


    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();
    generateTokenAndSetCookies(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });

  } catch (error) {
    console.log("Error in signup controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
 try {
    const{username , password} = req.body ; 
    const user = await User.findOne({username}) ;
    const isPasswordCorrect  = await bcrypt.compare(password , user ?.password || "");

    if(!user || !isPasswordCorrect){
        return res.status(400).json({error :"invalid Username or password"}) ;
    }
    generateTokenAndSetCookies(user._id , res) ; 
     res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });


 } catch (error) {
      console.log("Error in login controller:", error);
    res.status(500).json({ error: "Internal server error" });
 }
};

export const logout =  (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production", // use true in prod
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
