import "../style/Roadmap.css";

function Roadmap() {
  return (
    <div className="roadmap">

      <h1>🗺 React Learning Roadmap</h1>

      <div className="roadmap-container">

        <div className="step">
          <h2>📅 Day 1</h2>
          <p>React Introduction</p>
        </div>

        <div className="arrow">⬇</div>

        <div className="step">
          <h2>📅 Day 2</h2>
          <p>JSX</p>
        </div>

        <div className="arrow">⬇</div>

        <div className="step">
          <h2>📅 Day 3</h2>
          <p>Components</p>
        </div>

        <div className="arrow">⬇</div>

        <div className="step">
          <h2>📅 Day 4</h2>
          <p>Props</p>
        </div>

        <div className="arrow">⬇</div>

        <div className="step">
          <h2>📅 Day 5</h2>
          <p>useState Hook</p>
        </div>

        <div className="arrow">⬇</div>

        <div className="step">
          <h2>📅 Day 6</h2>
          <p>Event Handling</p>
        </div>

        <div className="arrow">⬇</div>

        <div className="step">
          <h2>📅 Day 7</h2>
          <p>Conditional Rendering</p>
        </div>

        <div className="arrow">⬇</div>

        <div className="step">
          <h2>📅 Day 8</h2>
          <p>Lists & map()</p>
        </div>

      </div>

    </div>
  );
}

export default Roadmap;