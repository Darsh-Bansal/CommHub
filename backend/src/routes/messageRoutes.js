const express = require("express");
const router = express.Router();

const { getChannels, getMessages } = require("../services/slackService");
const { normalizeSlackMessage } = require("../utils/normalizeMessage");

router.get("/channels", async (req, res, next) => {
  try {
    const channels = await getChannels();
    res.json(channels);
  } catch (err) {
    next(err);
  }
});

router.get("/messages/:channelId", async (req, res, next) => {
  const channelId = req.params.channelId;

  try {
    const messages = await getMessages(channelId);
    const normalized = messages.map((msg) => normalizeSlackMessage(msg, channelId));
    res.json(normalized);
  } catch (err) {
    next(err);
  }
});

module.exports = router;