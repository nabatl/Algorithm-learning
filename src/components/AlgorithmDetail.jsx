import { useState } from 'react'

function AlgorithmDetail({ algorithm }) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const runAlgorithm = () => {
    try {
      // 动态执行算法代码
      const code = algorithm.code
      const functionName = code.match(/function\s+(\w+)/)[1]
      const func = new Function(`return ${code}`)()
      
      // 解析输入
      const parsedInput = eval(`(${input})`)
      let output
      
      // 根据参数数量执行函数
      if (Array.isArray(parsedInput)) {
        output = func(...parsedInput)
      } else {
        output = func(parsedInput)
      }
      
      setResult(JSON.stringify(output))
    } catch (error) {
      setResult(`错误: ${error.message}`)
    }
  }

  return (
    <div className="algorithm-detail">
      <h2>{algorithm.title}</h2>
      <p>{algorithm.description}</p>
      
      <div className="code-block">
        <pre>{algorithm.code}</pre>
      </div>
      
      <div className="test-section">
        <h3>测试</h3>
        <input
          type="text"
          className="test-input"
          placeholder="输入测试数据，例如: [1,2,3] 或 10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="test-button" onClick={runAlgorithm}>
          运行算法
        </button>
        {result && (
          <div className="test-result">
            <strong>结果:</strong> {result}
          </div>
        )}
        
        <div className="test-cases">
          <h4>测试用例:</h4>
          <ul>
            {algorithm.testCases.map((testCase, index) => (
              <li key={index}>
                输入: {testCase.input} → 预期输出: {testCase.expected}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmDetail