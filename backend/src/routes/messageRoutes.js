const express = require("express");
const router = express.Router();

const { getChannels, getMessages } = require("../services/slackService");
const { normalizeSlackMessage } = require("../utils/normalizeMessage");

router.get("/channels", async (req, res) => {
  const channels = await getChannels();
  res.json(channels);
});

router.get("/messages/:channelId", async (req, res) => {
  const messages = await getMessages(req.params.channelId);
  const normalized = messages.map(normalizeSlackMessage);

  res.json(normalized);
});

module.exports = router;