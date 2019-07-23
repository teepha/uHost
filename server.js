const express = require("express");
const sendMail = require("./mail");

const log = console.log;
const app = express();
const path = require("path");

const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/email", (req, res) => {
  const { name, email, message } = req.body;
  sendMail(name, email, message, function(err, data) {
    if (err) {
      res.status(500).json({ message: "Ops! An error occured" });
    } else {
      res.json({ message: "Your message was sent successfully. Thanks!" });
    }
  });
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "emjay_solutions", "index.html"));
// });
app.use(express.static(path.resolve(`${__dirname}/emjay_solutions`)));

app.listen(PORT, () => log("server running on PORT", PORT));
