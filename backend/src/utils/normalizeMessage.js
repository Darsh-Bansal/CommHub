function normalizeSlackMessage(msg, channelId = "unknown") {
  const timestamp = msg.ts && !Number.isNaN(Number(msg.ts))
    ? new Date(parseFloat(msg.ts) * 1000).toISOString()
    : null;

  return {
    platform: "slack",
    user: msg.user || msg.username || msg.bot_id || "unknown",
    channel: channelId || msg.channel || "unknown",
    content: msg.text || "",
    timestamp,
    raw: msg,
  };
}

module.exports = { normalizeSlackMessage };