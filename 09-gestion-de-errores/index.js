const winston = require('winston')

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
  });
  
  function Errores() {
    throw new Error("Error de function");
  }
  
  try {
    Errores();
  } catch (e) {
    logger.log("error", e);
  }