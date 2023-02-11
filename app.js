// REQUIRES
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const http = require("http");
const session = require("express-session");

// SERVER
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use("/static", express.static("public"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views/pages"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(session({ secret: "2C44-4D44-WppQ38S", resave: true, saveUninitialized: true }));

// ROUTES
app.use(require(path.join(__dirname, "./src/routes/views.routes")));
// app.use(require("./src/backend/routes/services"));

server.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}`);
});
