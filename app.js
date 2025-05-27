import express from "express";
import { saveBlockchain } from "./src/database/blockchainDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT} 🚀`);

  saveBlockchain({ blocks: [] });
});
