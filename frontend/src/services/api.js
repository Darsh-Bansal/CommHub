const BASE_URL = "http://localhost:5000/api";

export const getChannels = async () => {
  const res = await fetch(`${BASE_URL}/channels`);
  return res.json();
};

export const getMessages = async (channelId) => {
  const res = await fetch(`${BASE_URL}/messages/${channelId}`);
  return res.json();
};