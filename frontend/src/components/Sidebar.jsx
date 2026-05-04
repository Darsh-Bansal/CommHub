function Sidebar({ filter, setFilter }) {
  const items = ["All", "Slack"];

  return (
    <div className="sidebar">
      <h3>Inbox</h3>

      {items.map((item) => (
        <p
          key={item}
          onClick={() => setFilter(item)}
          className={`sidebar-item ${filter === item ? "active" : ""}`}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default Sidebar;