import express from "express";
import {
  getBlocks,
  getBlockById,
  createBlock,
  updateBlock,
  deleteBlock,
} from "../controllers/blockController.mjs";

const router = express.Router();

router.post("/", createBlock);
router.get("/", getBlocks);
router.get("/:id", getBlockById);

export default router;
