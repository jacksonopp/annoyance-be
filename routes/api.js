const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/ping', (req, res) => {
  res.json({ message: 'ping' });
});

router.post('/', async (req, res, next) => {
  const { seconds, successTime } = req.body;
  console.log(seconds, successTime);

  try {
    const dbTime = await db.Times.create({
      wait_time: seconds,
      success_time: successTime,
    });
    res.status(200).json(dbTime);
  } catch (error) {
    res.status(500).json({ message: '500 Internal Error' });
  }
  // res.json({ message: 'connected' });
});

router.get('/', async (req, res, next) => {
  try {
    const dbTimes = await db.Times.find();
    console.log(dbTimes);
    res.json(dbTimes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;
