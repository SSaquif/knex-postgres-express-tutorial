const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const personRouter = require("./routes/person");
require("dotenv").config();

const PORT = 8000;

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", personRouter);

app.use("*", (req, res) => {
  res.status(501).json({ msg: "Can't Process" });
});

app.listen(PORT, () => {
  console.log(`listening on PORT:${PORT}`);
});
