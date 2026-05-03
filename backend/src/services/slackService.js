import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


// getting slack token from env
const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN;
if (!SLACK_TOKEN) {
  throw new Error("Missing SLACK_BOT_TOKEN environment variable.");
}


// Creating acessspoint for slack api so we dont need to use axios again and again
const slackClient = axios.create({
  baseURL: "https://slack.com/api",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${SLACK_TOKEN}`,
  },
});


// getting channels list
async function getChannels() {
  const res = await slackClient.get("/conversations.list");
  if (!res.data.ok) {
    throw new Error(res.data.error || "Slack conversations.list failed");
  }
  return res.data.channels || [];
}


// getting messages for a channel
async function getMessages(channelId) {

  //joining channel
  await slackClient.post("/conversations.join", {
  channel: channelId,
  });
  
  // getting chats
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

export { getChannels, getMessages };