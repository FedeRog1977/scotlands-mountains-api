async function getAccount(req, res, next) {
  try {
    const account = accounts.find((account) => account.id === req.params.id);

    if (account == null) {
      return res.status(404).json({ message: 'Cannot find account' });
    }

    res.account = account;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = { getAccount };
