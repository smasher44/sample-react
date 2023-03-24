import React, { useState } from 'react';
import './App.css';


function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const handleInputChange = (event) => {
    setGoal(event.target.value);
  };

  const handleAddGoal = () => {
    setGoals((prevGoals) => [...prevGoals, goal]);
    setGoal('');
  };

  return (
    <div id="app">
      <div>
        <label htmlFor="goal">Goal</label>
        <input type="text" id="goal" value={goal} onChange={handleInputChange} />
        <button onClick={handleAddGoal}>Add Goal</button>
      </div>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;