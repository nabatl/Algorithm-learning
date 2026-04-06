import { algorithms } from './algorithms'

function AlgorithmList({ onSelectAlgorithm }) {
  return (
    <div className="algorithm-list">
      <h2>算法题库</h2>
      {algorithms.map((category, index) => (
        <div key={index} className="algorithm-category">
          <h3>{category.category}</h3>
          {category.items.map((algorithm) => (
            <div
              key={algorithm.id}
              className="algorithm-item"
              onClick={() => onSelectAlgorithm(algorithm)}
            >
              {algorithm.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default AlgorithmList