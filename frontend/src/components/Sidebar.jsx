function Sidebar({ setFilter }) {
  return (
    <div className="sidebar">
      <h3>Inbox</h3>

      <p onClick={() => setFilter("All")}>All</p>
      <p onClick={() => setFilter("Slack")}>Slack</p>
      <p onClick={() => setFilter("Instagram")}>Instagram</p>
      <p onClick={() => setFilter("WhatsApp")}>WhatsApp</p>

      <div className="settings">⚙ Settings</div>
    </div>
  );
}

export default Sidebar;