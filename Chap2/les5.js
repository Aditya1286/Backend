import express from "express";
import { body, validationResult } from "express-validator";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "les5.html"));
});

app.post(
  "/register",
  [
    body("name").isEmpty().withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Invalid email format"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be greater than 6"),
  ],

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.send("Registration Successful!!!");
  }
);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
