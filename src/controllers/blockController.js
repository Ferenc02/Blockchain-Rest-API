import * as service from "../services/blockchainService.js";

export async function listBlocks(req, res, next) {
  try {
    res.json(service.getAllBlocks());
  } catch (err) {
    next(err);
  }
}

export async function getBlockByIndex(req, res, next) {
  try {
    const block = service.getBlock(Number(req.params.index));
    if (!block) return res.status(404).json({ error: "Block not found" });
    res.json(block);
  } catch (err) {
    next(err);
  }
}

export async function createNewBlock(req, res, next) {
  try {
    console.log("Creating new block with data:", req.body);
    const block = await service.createBlock(req.body);
    res.status(201).json(block);
  } catch (err) {
    next(err);
  }
}
