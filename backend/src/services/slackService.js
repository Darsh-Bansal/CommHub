const axios = require("axios");

const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN;

async function getChannels() {
  const res = await axios.get("https://slack.com/api/conversations.list", {
    headers: {
      Authorization: `Bearer ${SLACK_TOKEN}`,
    },
  });
  return res.data.channels;
}

async function getMessages(channelId) {
  const res = await axios.get("https://slack.com/api/conversations.history", {
    headers: {
      Authorization: `Bearer ${SLACK_TOKEN}`,
    },
    params: {
      channel: channelId,
    },
  });
  return res.data.messages;
}

module.exports = { getChannels, getMessages };