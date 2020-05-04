const express = require("express");
const bodyParser = require("body-parser");

//Use the express high level function
const app = express();

//Use the body parser middle ware
app.use(bodyParser.json());

const mockUserData = [{ name: "Luigi" }, { name: "Morel" }];

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got the users!",
    users: mockUserData,
  });
});

//This will fetch only one users from the mock data above

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "successfully got one user!",
    users: req.params.id,
  });
});

//A post request
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "bill1234";
  const mockPassword = "superDumb";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and the username match",
      token: "the encypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and the username do not macth",
    });
  }
});
app.listen(8000, function () {
  console.log("server is running");
});
