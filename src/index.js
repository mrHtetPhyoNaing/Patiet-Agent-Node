const error = require("./middlewares/error");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(express.static(`${__dirname}/../public`));

require("./startup/logging");
require("./startup/handlebarsHelper")();
require("./startup/db")();
require("./startup/routes")(app);
app.use(error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
