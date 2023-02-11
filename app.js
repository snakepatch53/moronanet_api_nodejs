// REQUIRES
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const http = require("http");
const session = require("express-session");

//REQUIRE ROUTES
const apiRoutes = require("./src/routes/api.routes");
const viewsRoutes = require("./src/routes/views.routes");

// SERVER
const app = express();
const server = http.createServer(app);
const PORT = process.env.APLICATION_PORT || 3000;

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/static", express.static("public"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src/views/pages"));
app.use(morgan("dev"));

const oneDay = 1000 * 60 * 60 * 24; //Session time
app.use(session({ secret: "2C44-4D44-WppQ38S", resave: true, saveUninitialized: true }));

// ROUTES
// viewsRoutes(app);
// apiRoutes(app);
// app.use("/", (req, res) => res.redirect("/panel"));
app.use(viewsRoutes);
app.use(apiRoutes);

// process
//     .on("unhandledRejection", (reason, p) => {
//         console.error(reason, "Unhandled Rejection at Promise", p);
//     })
//     .on("uncaughtException", (err) => {
//         console.error(err, "Uncaught Exception thrown");
//         process.exit(1);
//     });

server.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}`);
});
