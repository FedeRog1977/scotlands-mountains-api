const express = require('express');
const router = express.Router();
const accounts = require('../data/accounts.json');
// const Account = require('../models/account.js');

router.get('/', async (req, res) => {
  try {
    // TODO: implement with MongoDB database
    // const accounts = await Account.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
