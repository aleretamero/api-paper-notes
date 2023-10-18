import "dotenv/config";
import { app } from "./App";
import { run } from "./database";

const PORT = Number(process.env.PORT) ?? 3333;

run()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🔥`);
    });
  })
  .catch((error) => console.log(error));
