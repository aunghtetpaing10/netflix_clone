import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  authCheck
} from "../controllers/authController.js";
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/authcheck",protectRoute, authCheck);

export default router;
