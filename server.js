const express = require("express");

const app = express();

const mockUserData = [{ name: "Luigi" }, { name: "Morel" }];

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got the users!",
    users: mockUserData,
  });
});

//This will fdetch only one users from the mock data above

app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "successfully got one user!",
    users: req.params.id,
  });
});
app.listen(8000, function () {
  console.log("server is running");
});
