import { useState, useEffect } from 'react'
import { examples } from './exampleData'

function AlgorithmExamples() {
  const [selectedExample, setSelectedExample] = useState(null)
  const [readExamples, setReadExamples] = useState(new Set())
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h5>代码：</h5>
                  <select 
                    value={selectedLanguage} 
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                      fontSize: '0.8rem'
                    }}
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                  </select>
                </div>
                <button 
                  onClick={() => {
                    const codeElement = document.querySelector('.example-code pre');
                    
                    // 添加旋转效果，确保文字也跟着旋转
                    codeElement.style.transform = 'rotate(-90deg) scale(1)';
                    codeElement.style.transformOrigin = 'center';
                    codeElement.style.transition = 'transform 0.5s ease';
                    codeElement.style.width = '100vh'; // 旋转后宽度等于视口高度
                    codeElement.style.height = '100vw'; // 旋转后高度等于视口宽度
                    codeElement.style.display = 'flex';
                    codeElement.style.alignItems = 'center';
                    codeElement.style.justifyContent = 'center';
                    codeElement.style.whiteSpace = 'pre-wrap';
                    codeElement.style.wordWrap = 'break-word';
                    
                    if (codeElement.requestFullscreen) {
                      codeElement.requestFullscreen().then(() => {
                        // 全屏成功后添加关闭按钮
                        addCloseButton();
                      });
                    } else if (codeElement.webkitRequestFullscreen) {
                      codeElement.webkitRequestFullscreen();
                      // 添加关闭按钮
                      addCloseButton();
                    } else if (codeElement.msRequestFullscreen) {
                      codeElement.msRequestFullscreen();
                      // 添加关闭按钮
                      addCloseButton();
                    }
                    
                    // 检测是否为移动设备
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                      // 尝试强制横屏
                      if (screen.orientation && screen.orientation.lock) {
                        screen.orientation.lock('landscape').catch(err => {
                          console.log('无法强制横屏:', err);
                        });
                      } else if (screen.lockOrientation) {
                        screen.lockOrientation('landscape').catch(err => {
                          console.log('无法强制横屏:', err);
                        });
                      }
                    }
                    
                    // 添加关闭按钮的函数
                    function addCloseButton() {
                      // 检查是否已经存在关闭按钮
                      if (document.getElementById('fullscreen-close-btn')) {
                        return;
                      }
                      
                      // 创建关闭按钮
                      const closeButton = document.createElement('button');
                      closeButton.id = 'fullscreen-close-btn';
                      closeButton.innerText = '×';
                      closeButton.style.position = 'fixed';
                      closeButton.style.top = '20px';
                      closeButton.style.right = '20px';
                      closeButton.style.width = '40px';
                      closeButton.style.height = '40px';
                      closeButton.style.borderRadius = '50%';
                      closeButton.style.background = 'rgba(0, 0, 0, 0.8)';
                      closeButton.style.color = 'white';
                      closeButton.style.border = 'none';
                      closeButton.style.fontSize = '24px';
                      closeButton.style.cursor = 'pointer';
                      closeButton.style.zIndex = '9999';
                      closeButton.style.display = 'flex';
                      closeButton.style.alignItems = 'center';
                      closeButton.style.justifyContent = 'center';
                      closeButton.style.transition = 'background 0.3s ease';
                      
                      // 鼠标悬停效果
                      closeButton.addEventListener('mouseover', function() {
                        this.style.background = 'rgba(0, 0, 0, 0.9)';
                      });
                      
                      closeButton.addEventListener('mouseout', function() {
                        this.style.background = 'rgba(0, 0, 0, 0.8)';
                      });
                      
                      // 点击关闭按钮退出全屏
                      closeButton.addEventListener('click', function() {
                        if (document.exitFullscreen) {
                          document.exitFullscreen();
                        } else if (document.webkitExitFullscreen) {
                          document.webkitExitFullscreen();
                        } else if (document.msExitFullscreen) {
                          document.msExitFullscreen();
                        }
                        
                        // 恢复代码元素的旋转和样式
                        codeElement.style.transform = 'rotate(0deg)';
                        codeElement.style.width = 'auto';
                        codeElement.style.height = 'auto';
                        codeElement.style.display = 'block';
                        
                        // 移除关闭按钮
                        this.remove();
                      });
                      
                      // 添加到文档
                      document.body.appendChild(closeButton);
                    }
                    
                    // 监听全屏退出事件
                    document.addEventListener('fullscreenchange', function() {
                      if (!document.fullscreenElement) {
                        // 退出全屏后恢复旋转和样式
                        codeElement.style.transform = 'rotate(0deg)';
                        codeElement.style.width = 'auto';
                        codeElement.style.height = 'auto';
                        codeElement.style.display = 'block';
                        
                        // 移除关闭按钮
                        const closeButton = document.getElementById('fullscreen-close-btn');
                        if (closeButton) {
                          closeButton.remove();
                        }
                      }
                    });
                    
                    document.addEventListener('webkitfullscreenchange', function() {
                      if (!document.webkitFullscreenElement) {
                        // 退出全屏后恢复旋转和样式
                        codeElement.style.transform = 'rotate(0deg)';
                        codeElement.style.width = 'auto';
                        codeElement.style.height = 'auto';
                        codeElement.style.display = 'block';
                        
                        // 移除关闭按钮
                        const closeButton = document.getElementById('fullscreen-close-btn');
                        if (closeButton) {
                          closeButton.remove();
                        }
                      }
                    });
                    
                    document.addEventListener('msfullscreenchange', function() {
                      if (!document.msFullscreenElement) {
                        // 退出全屏后恢复旋转和样式
                        codeElement.style.transform = 'rotate(0deg)';
                        codeElement.style.width = 'auto';
                        codeElement.style.height = 'auto';
                        codeElement.style.display = 'block';
                        
                        // 移除关闭按钮
                        const closeButton = document.getElementById('fullscreen-close-btn');
                        if (closeButton) {
                          closeButton.remove();
                        }
                      }
                    });
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
              <pre>{selectedLanguage === 'javascript' ? selectedExample.code : selectedExample.javaCode}</pre>
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