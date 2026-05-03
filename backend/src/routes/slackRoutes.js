import express from "express";
import {getChannels,getMessages} from "../services/slackService.js";
import normalizeSlackMessage  from "../utils/slacknormalizeMessage.js";

const router = express.Router();

router.get("/channels", async (req, res, next) => {
  try {
    const channels = await getChannels();
    res.json(channels);
  } catch (err) {
    next(err);
  }
});

router.get("/messages/:channelId", async (req, res, next) => {
  const channelId = req.params.channelId?.trim();
  console.log("Fetching messages for channel:", channelId);

  try {
    const messages = await getMessages(channelId);
    const normalized = messages.map((msg) => normalizeSlackMessage(msg, channelId));
    res.json(normalized);
  } catch (err) {
    next(err);
  }
});

export default router;