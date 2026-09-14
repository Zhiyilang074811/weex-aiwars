import { useState } from "react"
export default function StrategyPanel({ onRun }) {
  const [pair, setPair] = useState("BTC/USDT")
  const [mode, setMode] = useState("trend")
  const run = () => onRun({ pair, mode })
  return (
    <div className="card">
      <h3>\uD83D\uDD25 Strategy Controller</h3>
      <select className="input" value={pair} onChange={(e) => setPair(e.target.value)}>
        <option>BTC/USDT</option><option>ETH/USDT</option><option>SOL/USDT</option><option>ARB/USDT</option>
      </select>
      <select className="input" value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="trend">Trend Following</option><option value="meanrevert">Mean Reversion</option><option value="sentiment">Sentiment Analysis</option>
      </select>
      <button className="btn" onClick={run} disabled={false}>Start AI Trading</button>
    </div>
  )
}
