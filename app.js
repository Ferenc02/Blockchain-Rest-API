import express from "express";
import bodyParser from "body-parser";
import { saveBlockchain } from "./src/database/blockchainDB.js";
import { initialize } from "./src/services/blockchainService.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import router from "./src/routes/blockRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
await initialize();

app.use("/api/blocks", router);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT} 🚀`);
});
