const express = require('express');
const router = express.Router();

const db = require('../models');

router.get('/ping', (req, res) => {
  res.json({ message: 'ping' });
});

router.post('/', async (req, res, next) => {
  const { seconds } = req.body;
  console.log(seconds);

  // try {
  //   const dbTime = await db.Times.create({
  //     wait_time: seconds,
  //   });
  //   res.status(200).json(dbTime);
  // } catch (error) {
  //   res.status(500).json({ message: '500 Internal Error' });
  // }
  res.json({ message: 'connected' });
});

module.exports = router;
