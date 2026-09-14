export default function Header() {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h1 style={{ fontSize: '1.75rem', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        WEEX AI Wars Agent
      </h1>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
        <span className="tag">WEEX API</span>
        <span className="tag">x402</span>
        <span className="tag">AI Agent</span>
        <span className="tag">Auto Trading</span>
      </div>
    </div>
  )
}
