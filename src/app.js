const express = require("express");
const cors = require("cors");
const route = require("./Routes/route");
const app = express();

app.use(cors());
app.use(express.json()); //body-parser comes with express

app.use("/", route);

app.listen(8000);