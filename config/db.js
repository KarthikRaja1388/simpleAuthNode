const mongoose = require("mongoose");

const conectToDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`Connected Successfully ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = conectToDb;
