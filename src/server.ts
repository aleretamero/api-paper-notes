import "dotenv/config";
import { app } from "./App";
import { run } from "./database";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const HOST = process.env.HOST ?? "localhost";
const PORT = Number(process.env.PORT) ?? 3333;

run()
  .then(() => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    app.listen(PORT, HOST, () => {
      console.log(`Server running on http://${HOST}:${PORT} 🔥`);
    });
  })
  .catch((error) => console.log(error));
