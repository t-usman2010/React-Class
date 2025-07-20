const express = require("express");
const app = express.Router

app.get('/add', (req, res) => {
  const name = req.query.name;
   if (name && !members.includes(name)) {
    members.push(name);
  }
  res.redirect('/');    
});

module.exports = app