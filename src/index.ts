import app from "./app";
import { port } from "./config/config";

// Connect to MongoDB
// connectDb();

app.listen(port, () => {
  return console.log(
    `\x1b[33m \x1b[1m \x1b[4mNearBy Shop Server is listening at http://localhost:${port}\x1b[0m`
  );
});
