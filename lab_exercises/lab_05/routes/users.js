const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const filePath = path.join(__dirname, '../user.json');

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Unable to read user.json' });

    try {
      res.json(JSON.parse(data));
    } catch {
      res.status(500).json({ error: 'Invalid JSON format in user.json' });
    }
  });
});

/*
- /login route: accept username and password as JSON body parameters
- Validate against user.json
*/
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Unable to read user.json' });

    let user;
    try {
      user = JSON.parse(data); // single object
    } catch {
      return res.status(500).json({ error: 'Invalid JSON format in user.json' });
    }

    if (user.username !== username) {
      return res.json({ status: false, message: "User Name is invalid" });
    }

    if (user.password !== password) {
      return res.json({ status: false, message: "Password is invalid" });
    }

    return res.json({ status: true, message: "User Is valid" });
  });
});

/*
- /logout route: accept username as query parameter and return HTML response
*/
router.get('/logout/:username', (req, res) => {
  const { username } = req.params;

  if (!username) {
    return res.send('<b>No username provided</b>');
  }

  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router;
