function normalizeSlackMessage(msg) {
  return {
    platform: "slack",
    user: msg.user,
    content: msg.text,
    timestamp: msg.ts,
    channel: msg.channel || "unknown",
  };
}

module.exports = { normalizeSlackMessage };