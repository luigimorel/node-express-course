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

app.listen(8000, function () {
  console.log("server is running");
});
