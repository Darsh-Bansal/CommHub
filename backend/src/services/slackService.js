const axios = require("axios");

const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN;
if (!SLACK_TOKEN) {
  throw new Error("Missing SLACK_BOT_TOKEN environment variable.");
}

const slackClient = axios.create({
  baseURL: "https://slack.com/api",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${SLACK_TOKEN}`,
  },
});

async function getChannels() {
  const res = await slackClient.get("/conversations.list");
  if (!res.data.ok) {
    throw new Error(res.data.error || "Slack conversations.list failed");
  }
  return res.data.channels || [];
}

async function getMessages(channelId) {
  const res = await slackClient.get("/conversations.history", {
    params: {
      channel: channelId,
    },
  });

  if (!res.data.ok) {
    throw new Error(res.data.error || "Slack conversations.history failed");
  }
  return res.data.messages || [];
}

module.exports = { getChannels, getMessages };