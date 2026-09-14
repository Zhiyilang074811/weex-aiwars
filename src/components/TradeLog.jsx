export default function TradeLog({ trades }) {
  if (!trades.length) return null
  return (
    <div className="card">
      <h3>\uD83D\uDCCA Trade Log</h3>
      {trades.map((t) => (
        <div key={t.id} style={{ padding: "0.75rem 0", borderBottom: "1px solid #2d2d4a", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.875rem" }}>{t.ts} · {t.pair} · {t.side}</span>
          <span className={`status ${t.status}`}>{t.pnl > 0 ? "+" : ""}${t.pnl}</span>
        </div>
      ))}
    </div>
  )
}
