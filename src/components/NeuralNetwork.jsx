import { useEffect, useState } from "react"

const nodes = [
  { x: 15, y: 25 },
  { x: 28, y: 40 },
  { x: 42, y: 22 },
  { x: 55, y: 38 },
  { x: 70, y: 20 },
  { x: 82, y: 35 },
  { x: 22, y: 65 },
  { x: 38, y: 75 },
  { x: 55, y: 62 },
  { x: 72, y: 70 },
  { x: 88, y: 58 },
]

const connections = [
  [0, 1],
  [1, 2],
  [1, 6],
  [2, 3],
  [2, 4],
  [3, 8],
  [4, 5],
  [5, 10],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [3, 4],
]

function NeuralNetwork() {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="neural-network">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Connections */}
        {connections.map(([from, to], index) => {
          const start = nodes[from]
          const end = nodes[to]

          return (
            <line
              key={index}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              className="neural-line"
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node, index) => {
          const distance = Math.sqrt(
            Math.pow(mouse.x - node.x, 2) +
            Math.pow(mouse.y - node.y, 2)
          )

          const isNear = distance < 18

          return (
            <circle
              key={index}
              cx={node.x}
              cy={node.y}
              r={isNear ? 1.4 : 0.7}
              className={`neural-node ${
                isNear ? "node-active" : ""
              }`}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default NeuralNetwork