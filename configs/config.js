module.exports.Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  BE_PORT: process.env.PORT || 4000,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASS: process.env.DB_PASS || "",
  DB_DATABASE: process.env.DB_DATABASE || "profileDB",
  SECRET_JWT: process.env.SECRET_JWT || "756ac61e-4078-4af3-8f87-30bc1bc9fd48",
};
