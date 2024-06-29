const express = require('express');
const router = express.Router();
const pool = require('./database.js');

router.post('/add', async (req, res) => {
  const { amount } = req.body;
  try {
    const newTransaction = await pool.query(
      'INSERT INTO transactions (amount, type) VALUES ($1, $2) RETURNING *',
      [amount, 'credit']
    );
    res.json(newTransaction.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/withdraw', async (req, res) => {
  const { amount } = req.body;
  try {
    const newTransaction = await pool.query(
      'INSERT INTO transactions (amount, type) VALUES ($1, $2) RETURNING *',
      [amount, 'debit']
    );
    res.json(newTransaction.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/balance', async (req, res) => {
  try {
    const result = await pool.query('SELECT SUM(CASE WHEN type = $1 THEN amount ELSE -amount END) as balance FROM transactions', ['credit']);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get('/history', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM transactions ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;