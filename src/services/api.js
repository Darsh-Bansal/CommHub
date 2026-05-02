export const getChats = async () => {
  return [
    {
      id: 1,
      name: "Arnav",
      platform: "Instagram",
      lastMessage: "Hello bro",
      messages: ["Hello bro", "How are you?"]
    },
    {
      id: 2,
      name: "Team",
      platform: "WhatsApp",
      lastMessage: "Meeting at 5",
      messages: ["Meeting at 5", "Don't be late"]
    },
    {
      id: 3,
      name: "Dev Group",
      platform: "Telegram",
      lastMessage: "Update done",
      messages: ["Update done", "Check now"]
    }
  ];
};