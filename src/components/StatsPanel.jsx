export default function StatsPanel({ stats, status }) {
  const labels = { idle: "\u25cf Idle", running: "\u25cb Running...", error: "\u2717 Error" }
  const cls = { idle: "success", running: "pending", error: "error" }
  return (
    <>
      <div className={`status ${cls[status]}`}>{labels[status]}</div>
      <div className="stat-grid">
        <div className="stat-box"><div className="stat-value">{stats.winRate}%</div><div className="stat-label">Win Rate</div></div>
        <div className="stat-box"><div className="stat-value">{stats.totalTrades}</div><div className="stat-label">Total Trades</div></div>
        <div className="stat-box"><div className="stat-value">+${stats.profit}</div><div className="stat-label">Profit (24h)</div></div>
      </div>
    </>
  )
}
