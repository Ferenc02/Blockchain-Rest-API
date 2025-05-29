import { logError } from "../services/logger.js";

export default function errorHandler(err, req, res, next) {
  logError(err);

  res.status(500).json({
    error: "Internal Server Error - Check logs for details",
  });
}
