import 'dotenv/config';
import { app } from './App';

const PORT = Number(process.env.PORT) ?? 3333;
const HOST = process.env.HOST ?? 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT} 🔥`);
});
