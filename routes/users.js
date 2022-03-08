import express from "express";

import {
  getAllUsers,
  getSpeicificUser,
  deleteUser,
  updateUser,
  addUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.get("/:id", getSpeicificUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
export default router;
