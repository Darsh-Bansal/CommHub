import axios from "axios";

export const getChannels = async () => {
  try {
    const res = await axios.get("http://localhost:3000/slack/channels");
    return res.data;
  } catch (err) {
    console.error("Error fetching channels:", err);
    return [];
  }
};

export const getMessages = async (channelId) => {
  try {
    const res = await axios.get(`http://localhost:3000/slack/messages/${channelId}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching messages:", err);
    return [];
  }
};