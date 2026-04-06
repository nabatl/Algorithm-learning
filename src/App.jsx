import { useState } from 'react'
import './App.css'
import AlgorithmList from './components/AlgorithmList'
import AlgorithmDetail from './components/AlgorithmDetail'
import AlgorithmExamples from './components/AlgorithmExamples'
import AlgorithmBasics from './components/AlgorithmBasics'

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null)
  const [activeTab, setActiveTab] = useState('algorithms')

  return (
    <div className="app">
      <header className="app-header">
        <h1>SHL算法学习平台</h1>
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'algorithms' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('algorithms')
              setSelectedAlgorithm(null)
            }}
          >
            算法题库
          </button>
          <button 
            className={`nav-tab ${activeTab === 'examples' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('examples')
              setSelectedAlgorithm(null)
            }}
          >
            算法例题
          </button>
          <button 
            className={`nav-tab ${activeTab === 'basics' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('basics')
              setSelectedAlgorithm(null)
            }}
          >
            算法基础
          </button>
        </div>
      </header>
      <main className="app-main">
        {activeTab === 'algorithms' ? (
          <>
            <AlgorithmList onSelectAlgorithm={setSelectedAlgorithm} />
            {selectedAlgorithm && (
              <AlgorithmDetail algorithm={selectedAlgorithm} />
            )}
          </>
        ) : activeTab === 'examples' ? (
          <AlgorithmExamples />
        ) : (
          <AlgorithmBasics />
        )}
      </main>
    </div>
  )
}

export default App