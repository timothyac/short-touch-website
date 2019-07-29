const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
