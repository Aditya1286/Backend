import express from "express";
import { body, validationResult } from "express-validator";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Fix __dirname and __filename in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse HTML form data and JSON
app.use(express.urlencoded({ extended: true })); // <---- IMPORTANT
app.use(express.json());

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "les5.html"));
});

// POST route with validations
app.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be greater than 6 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.send(`Registration Successful, Welcome ${req.body.name}!`);
  }
);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
