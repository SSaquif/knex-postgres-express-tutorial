const express = require("express");
const personRouter = require("./routes/person");
require("dotenv").config();

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(personRouter);

app.get("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`);
});
