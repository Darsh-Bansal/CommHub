function normalizeSlackMessage(msg, channelId = "unknown") {
  
  return {
    platform: "slack",
    user: msg.user || msg.username || msg.bot_id || "unknown",
    channel: channelId || msg.channel || "unknown",
    content: msg.text || "",
    raw: msg
  };
};

export default normalizeSlackMessage;