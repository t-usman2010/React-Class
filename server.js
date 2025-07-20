const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const addRouter = require('./add');

let members = ['Ali', 'Sara', 'Usman'];

app.use(express.static('public'));

// Get all members as JSON (used by frontend JavaScript)
app.get('/data', (req, res) => {
  res.json(members);
});

// Add a member
app.use('/add', addRouter);

// Remove a member
app.get('/remove', (req, res) => {
  const name = req.query.name;
  members = members.filter(m => m !== name);
  res.redirect('/');
});

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Gym app running at http://localhost:${port}`);
});
