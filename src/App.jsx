import { useState } from 'react'
import './App.css'
import AlgorithmExamples from './components/AlgorithmExamples'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>SHL算法学习平台</h1>
      </header>
      <main className="app-main">
        <AlgorithmExamples />
      </main>
    </div>
  )
}

export default App