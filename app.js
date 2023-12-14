var addDays = require("date-fns/addDays");

const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const date = new Date();
  const afterDate = addDays(date, 100);
  response.send(
    `${afterDate.getDate()}/${
      afterDate.getMonth() + 1
    }/${afterDate.getFullYear()}`
  );
});
module.exports = app;
