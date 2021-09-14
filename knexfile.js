// This line is required if you want to make use of the .env file.
require("dotenv").config();

//you'll see that a URL variable is set so that
//if the NODE_ENV environment variable is equal to the string "production",
//PRODUCTION_DATABASE_URL will be used.
//Otherwise, DEVELOPMENT_DATABASE_URL will be used.
const {
  NODE_ENV = "development",
  DEVELOPMENT_DATABASE_URL,
  PRODUCTION_DATABASE_URL,
} = process.env;
const URL =
  NODE_ENV === "production"
    ? PRODUCTION_DATABASE_URL
    : DEVELOPMENT_DATABASE_URL;

module.exports = {
  development: {
    client: "postgresql",
    connection: URL,
    migrations: {
      directory: __dirname + "/api/db/migrations",
    },
    seeds: {
      directory: __dirname + "/api/db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: URL,
    migrations: {
      directory: __dirname + "/api/db/migrations",
    },
    seeds: {
      directory: __dirname + "/api/db/seeds",
    },
  },
};
