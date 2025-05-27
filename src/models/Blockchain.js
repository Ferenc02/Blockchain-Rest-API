import Block from "./Block.js";

export default class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.diffficulty = 4;
  }

  createGenesisBlock() {
    return new Block(
      0,
      new Date().toISOString(),
      {
        message: "Genesis Block",
      },
      "0"
    );
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.diffficulty);
    this.chain.push(newBlock);
  }

  getBlock(index) {
    return this.chain[index];
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
