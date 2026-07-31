import "../style/Progress.css";

function Progress() {
  return (
    <div className="progress-container">

      <h1>📊 My React Learning Progress</h1>

      <div className="progress-card">

        <h2>Course Progress</h2>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <h3>1 / 8 Days Completed</h3>

        <p>12.5% Completed</p>

      </div>

      <div className="progress-card">

        <h2>Daily Status</h2>

        <table>

          <thead>

            <tr>
              <th>Day</th>
              <th>Topic</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Day 1</td>
              <td>React Introduction</td>
              <td>✅ Completed</td>
            </tr>

            <tr>
              <td>Day 2</td>
              <td>JSX</td>
              <td>🟡 Pending</td>
            </tr>

            <tr>
              <td>Day 3</td>
              <td>Components</td>
              <td>🟡 Pending</td>
            </tr>

            <tr>
              <td>Day 4</td>
              <td>Props</td>
              <td>🟡 Pending</td>
            </tr>

            <tr>
              <td>Day 5</td>
              <td>useState</td>
              <td>🟡 Pending</td>
            </tr>

            <tr>
              <td>Day 6</td>
              <td>Events</td>
              <td>🟡 Pending</td>
            </tr>

            <tr>
              <td>Day 7</td>
              <td>Conditional Rendering</td>
              <td>🟡 Pending</td>
            </tr>

            <tr>
              <td>Day 8</td>
              <td>Lists & map()</td>
              <td>🟡 Pending</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Progress;