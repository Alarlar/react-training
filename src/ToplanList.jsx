import React from 'react';

const trainingPlan = [
    { id: 1, title: "Sleep"},
    { id: 2, title: "Train"},
    { id: 3, title: "Make $"}
  ];

function ToplanList() {
    return (
        <div>
            <ul> 
                {trainingPlan.map((plan) => 
                    <li key={plan.id}>{plan.title}</li>
                )}
            </ul>
        </div>
    );
} 

export default ToplanList;