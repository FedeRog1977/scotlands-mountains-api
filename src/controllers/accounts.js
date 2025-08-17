const express = require('express');
const router = express.Router();
const accounts = require('../data/accounts.json');
// const Account = require('../models/account.js');
const { PASSWORD_VALIDATION } = require('../libs/constants/password-validation.js');
const { writeDataToFile } = require('../libs/utils/write-data-to-file.js');
const { getAccount } = require('../models/accounts.js');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all accounts.
 *     description: Get all accounts.
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: Accounts not found
 *       '500':
 *         description: Internal server error
 */
router.get('/', async (req, res) => {
  try {
    // TODO: implement with MongoDB database
    // const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @swagger
 * /{id}:
 *   patch:
 *     summary: Update account by ID.
 *     description: Update account by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Account ID
 *     responses:
 *       '200':
 *         description: Success
 *       '404':
 *         description: Account not found
 *       '500':
 *         description: Internal server error
 */
router.patch('/:id', getAccount, async (req, res) => {
  const rest = {
    honorific: req.body.honorific ?? res.account.honorific,
    forename: req.body.forename ?? res.account.forename,
    surname: req.body.surname ?? res.account.surname,
    username: req.body.username ?? res.account.username,
    password: req.body.password ?? res.account.password,
    entryDate: req.body.entryDate ?? res.account.entryDate,
  };

  try {
    const index = accounts.findIndex((account) => account.id === req.params.id);
    accounts[index] = { id: req.params.id, ...rest };

    // TODO: implement with MongoDB database
    // const updatedAccount = await res.account.save();
    writeDataToFile('./data/accounts.json', accounts);
    res.json(accounts[index]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc Delete an account
// @route DELETE /accounts/:id
router.delete('/:id', getAccount, async (req, res) => {
  try {
    const account = accounts.filter((account) => account.id !== req.params.id);

    // TODO: implement with MongoDB database
    // await res.subscriber.remove();
    writeDataToFile('./data/accounts.json', account);
    res.json({ account: res.account, message: `Deleted account ${res.account.username}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc Create an account
// @route POST /accounts
router.post('/', async (req, res) => {
  const usernames = accounts.map((account) => account.username);

  if (usernames.includes(req.body.username)) {
    res.status(500).json({ message: `Account already exists with username ${req.body.username}` });
  } else if (!req.body.password.match(PASSWORD_VALIDATION)) {
    res
      .status(500)
      .json({ message: `Account password "${req.body.password}" does not meet requirements` });
  } else {
    const rest = req.body;

    // TODO: implement with MongoDB database
    // const account = new Account({ ..., ...req.body });
    try {
      const index = accounts.length - 1;
      accounts.push({ id: accounts[index].id + 1, entryDate: new Date().toISOString(), ...rest });

      // TODO: implement with MongoDB database
      // const newAccount = await subscriber.save();
      writeDataToFile('./data/accounts.json', accounts);
      res.status(201).json({
        message: `Created account for "${req.account.username}"`,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
});

module.exports = router;
