import { loadBlockchain } from "../database/blockchainDB";
import { logError } from "./logger";

export class BlockchainService {
  constructor() {
    this.blockchain = [];
    this.loadBlockchain();
  }

  async loadBlockchain() {
    try {
      const data = await loadBlockchain();
      this.blockchain = data.blocks || [];
    } catch (error) {
      logError(error);
    }
  }
}
