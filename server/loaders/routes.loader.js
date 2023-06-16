/* Routes */
const companyRouter = require("../routes/company.routes");
const authRouter = require("../routes/auth.routes");

class RoutesLoader {
  static initRoutes(app) {
    app.use(`/api/auth`, authRouter);
    app.use(`/api/company`, companyRouter);
    app.use("/", async (req, res) => {
      res.status(404).send("No such route found in the API.");
    });
  }
}

module.exports = { RoutesLoader };
