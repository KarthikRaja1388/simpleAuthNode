require("dotenv").config();

const app = require("./app.js");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
