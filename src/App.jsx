import React from 'react';
import './App.css';

const trainingPlan = [
  { id: 1, title: "Sleep"},
  { id: 2, title: "Train"},
  { id: 3, title: "Make $"}
];

function App() {
 return (
    <div>
      <h1>Training Plan</h1>
      <ul> 
        {trainingPlan.map((plan) => 
          <li key={plan.id}>{plan.title}</li>
      )}
      </ul>
    </div>
  );
}

export default App;
