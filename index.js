const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const hpp = require("hpp");
const path = require("path");
const helmet = require("helmet");

// Routes
const CountriesRoutes = require("./routes/countries");
const StatesRoutes = require("./routes/states");

// Subscribing to unhandledRejections
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection: 🔥💥 Shutting down");
  process.exit(1);
});

dotenv.config();

const app = express();

// Middlewares
// Defining template
app.set("view engine", "pug"); // Set pug as template engine
app.set("views", path.join(__dirname, "views"));

// Addming Helmet middleware for security purposes
app.use(helmet());

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;

// Routes
app.use("/countries", CountriesRoutes);
app.use("/states", StatesRoutes);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

// Unhandled routes should always be the last on the code after all middlewares
app.use("*", (req, res, next) => {
  res.send(`Can't fine ${req.originalUrl} on this server`, 404);
});

/**
 * Global error handling middleware
 */
