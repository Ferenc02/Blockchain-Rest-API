import { BlockchainService } from "../services/blockchainService";
import { logError } from "../services/logger";

let blockchainService;

export async function initializeBlockchain(req, res) {
  try {
    if (!blockchainService) {
      blockchainService = new BlockchainService();
    }
    const blockchain = await blockchainService.loadBlockchain();
    res.status(200).json(blockchain);
  } catch (error) {
    logError(error);
    res.status(500).json({ error: "Failed to load blockchain" });
  }
}

export async function createBlock(req, res) {
  try {
    blockchainService = new BlockchainService();
    const newBlock = await blockchainService.createBlock(req.body);
    res.status(201).json(newBlock);
  } catch (error) {
    logError(error);
  }
}
