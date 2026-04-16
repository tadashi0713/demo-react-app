import { useState } from 'react'
import './App.css'

function App() {
  const [showHello, setShowHello] = useState(false)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '20px'
    }}>
      <button
        onClick={() => setShowHello(true)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '8px'
        }}
      >
        Click
      </button>
      {showHello && <h1>Hello</h1>}
    </div>
  )
}

export default App
