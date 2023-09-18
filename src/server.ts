import "dotenv/config";
import { app } from "./App";
import { run } from "./config/database";

const PORT = Number(process.env.PORT) ?? 3333;
const HOST = process.env.HOST ?? "localhost";

run()
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Server running on http://${HOST}:${PORT} 🔥`);
    });
  })
  .catch((error) => console.log(error));
