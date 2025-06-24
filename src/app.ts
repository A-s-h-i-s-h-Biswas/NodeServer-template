import express from "express";
import cors from "cors";
const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// ✅ CORS Middleware (Place at the top)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8082"], // Added both frontend origins
    credentials: true,
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "token",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

// Manually handle OPTIONS (Preflight Requests)
// app.options("*", (req, res) => {
//   res.status(200).send();
// });

app.get("/", (req, res) => {
  res.send(`<h1>Received Successfully</h1>`);
});

export default app;
