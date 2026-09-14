import { useState, useEffect } from 'react'
import Header from './components/Header'
import StrategyPanel from './components/StrategyPanel'
import StatsPanel from './components/StatsPanel'
import TradeLog from './components/TradeLog'
export default function App() {
  const [trades, setTrades] = useState([])
  const [status, setStatus] = useState('idle')
  const [stats, setStats] = useState({ winRate: 68.5, totalTrades: 142, profit: 12.4, draws: 0 })
  const runStrategy = async (strategy) => {
    setStatus('running')
    for (let i = 0; i < 5; i++) {
      await new Promise(r => setTimeout(r, 800))
      const ok = Math.random() > 0.3
      const trade = { id: Date.now() + i, ts: new Date().toLocaleTimeString(), pair: strategy.pair || 'BTC/USDT', side: ok ? 'LONG' : 'SHORT', pnl: ok ? (Math.random() * 2).toFixed(2) : -(Math.random() * 1).toFixed(2), status: ok ? 'success' : 'error' }
      setTrades(prev => [trade, ...prev])
      setStats(s => ({ ...s, totalTrades: s.totalTrades + 1, winRate: ok ? Math.min(95, s.winRate + 0.5) : Math.max(40, s.winRate - 1), profit: s.profit + (ok ? parseFloat(trade.pnl) : -parseFloat(trade.pnl)) }))
    }
    setStatus('idle')
  }
  return (
    <div className="app">
      <Header />
      <div className="subtitle">AI-Powered Trading Agent · WEEX Exchange · x402 Micro-Payments</div>
      <StatsPanel stats={stats} status={status} />
      <StrategyPanel onRun={runStrategy} />
      <TradeLog trades={trades} />
    </div>
  )
}
