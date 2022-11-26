const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); //first param is set error to null/ second is boolean that sets if allowed or not
    } else {
      callback(new Error("Not Allowed by CORS."));
    }
  },
  credentials: true, //this sets thae access controls credential header
  optionSuccessStatus: 200, //for devices
};

module.exports = corsOptions;
