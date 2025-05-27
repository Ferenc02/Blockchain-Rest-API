import { BlockchainService } from "../services/blockchainService";
import { logError } from "../services/logger";

export async function createBlock(req, res) {
  try {
    const blockchainService = new BlockchainService();
    const newBlock = await blockchainService.createBlock(req.body);
    res.status(201).json(newBlock);
  } catch (error) {
    logError(error);
  }
}
