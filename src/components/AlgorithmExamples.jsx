import { useState, useEffect } from 'react'
import { examples } from './exampleData'

function AlgorithmExamples() {
  const [selectedExample, setSelectedExample] = useState(null)
  const [readExamples, setReadExamples] = useState(new Set())
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')

  // 从localStorage加载已阅读的题目
  useEffect(() => {
    const savedReadExamples = localStorage.getItem('readExamples')
    if (savedReadExamples) {
      setReadExamples(new Set(JSON.parse(savedReadExamples)))
    }
  }, [])

  // 保存已阅读的题目到localStorage
  useEffect(() => {
    localStorage.setItem('readExamples', JSON.stringify([...readExamples]))
  }, [readExamples])

  const handleExampleClick = (example) => {
    setSelectedExample(example)
    // 标记为已阅读
    setReadExamples(prev => new Set(prev).add(example.id))
    
    // 自动滚动到example-detail部分
    setTimeout(() => {
      const detailElement = document.querySelector('.example-detail');
      if (detailElement) {
        detailElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  // 过滤示例列表
  const filteredExamples = examples.filter(example => 
    example.englishDescription.toLowerCase().includes(searchKeyword.toLowerCase())
  )

  return (
    <div className="algorithm-examples">
      <h2>算法例题</h2>
      <div className="examples-container">
        <div className={`examples-list ${isCollapsed ? 'collapsed' : ''}`}>
          <div className="collapse-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? '展开' : '折叠'}
          </div>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="搜索英文描述..." 
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          {filteredExamples.map((example) => {
            const originalIndex = examples.indexOf(example);
            return (
              <div
                key={example.id}
                className={`example-item ${readExamples.has(example.id) ? 'read' : ''}`}
                onClick={() => handleExampleClick(example)}
              >
                <div className="example-number">{originalIndex + 1}</div>
              {!isCollapsed && (
                <>
                  <div className="example-title">{example.chineseTitle}</div>
                  <div className="example-original-title">{example.englishTitle}</div>
                </>
              )}
              {readExamples.has(example.id) && (
                <div className="read-mark">✓</div>
              )}
            </div>
            );
          })}

        </div>
        {selectedExample ? (
          <div className="example-detail">
            <h3>{selectedExample.chineseTitle}</h3>
            <h4>{selectedExample.englishTitle}</h4>
            
            <div className="example-description">
              <h5>中文描述：</h5>
              <p>{selectedExample.chineseDescription}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <h5>英文描述：</h5>
                <button 
                  onClick={() => {
                    const speech = new SpeechSynthesisUtterance(selectedExample.englishDescription);
                    speech.lang = 'en-US';
                    speechSynthesis.speak(speech);
                  }}
                  style={{
                    background: '#646cff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  朗读
                </button>
              </div>
              <p>{selectedExample.englishDescription}</p>
              {selectedExample.algorithm && (
                <div style={{ marginTop: '15px' }}>
                  <h5>算法：</h5>
                  <p>{selectedExample.algorithm}</p>
                  <h5>算法思想：</h5>
                  <p>{selectedExample.algorithmDescription}</p>
                </div>
              )}
            </div>
            
            <div className="example-test-cases">
              <h5>示例：</h5>
              {selectedExample.examples.map((item, index) => (
                <div key={index} className="test-case">
                  <div className="test-input">输入: {item.input}</div>
                  <div className="test-output">输出: {item.output}</div>
                </div>
              ))}
            </div>
            
            <div className="example-code">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h5>JavaScript 代码：</h5>
                <button 
                  onClick={() => {
                    const codeElement = document.querySelector('.example-code pre');
                    if (codeElement.requestFullscreen) {
                      codeElement.requestFullscreen();
                    } else if (codeElement.webkitRequestFullscreen) {
                      codeElement.webkitRequestFullscreen();
                    } else if (codeElement.msRequestFullscreen) {
                      codeElement.msRequestFullscreen();
                    }
                    
                    // 检测是否为移动设备
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                      // 尝试强制横屏
                      screen.orientation.lock('landscape').catch(err => {
                        console.log('无法强制横屏:', err);
                      });
                    }
                  }}
                  style={{
                    background: '#646cff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  全屏展示
                </button>
              </div>
              <pre>{selectedExample.code}</pre>
            </div>
            
            <div className="navigation-buttons">
              <button 
                className="nav-button" 
                onClick={() => {
                  const currentIndex = filteredExamples.findIndex(ex => ex.id === selectedExample.id)
                  if (currentIndex > 0) {
                    setSelectedExample(filteredExamples[currentIndex - 1])
                    setReadExamples(prev => new Set(prev).add(filteredExamples[currentIndex - 1].id))
                  }
                }}
                disabled={filteredExamples.findIndex(ex => ex.id === selectedExample.id) === 0}
              >
                上一题
              </button>
              <button 
                className="nav-button" 
                onClick={() => {
                  const currentIndex = filteredExamples.findIndex(ex => ex.id === selectedExample.id)
                  if (currentIndex < filteredExamples.length - 1) {
                    setSelectedExample(filteredExamples[currentIndex + 1])
                    setReadExamples(prev => new Set(prev).add(filteredExamples[currentIndex + 1].id))
                  }
                }}
                disabled={filteredExamples.findIndex(ex => ex.id === selectedExample.id) === filteredExamples.length - 1}
              >
                下一题
              </button>
            </div>
          </div>
        ) : (
          <div className="examples-placeholder">
            <p>请从左侧选择一个算法例题查看详情。</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AlgorithmExamples