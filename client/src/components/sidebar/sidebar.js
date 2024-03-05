import React, { useState, useEffect } from 'react';
import '../sidebar/sidebar.css';
import Questions from '../questions/questions';

function Sidebar() {
  const [selectedDifficulty, setSelectedDifficulty] = useState({
    easy: true,
    medium: true,
    hard: true,
  });

  const handleCheckboxChange = (difficulty) => {
    setSelectedDifficulty((prev) => ({
      ...prev,
      [difficulty]: !prev[difficulty],
    }));
  };

  const selectedCount = Object.values(selectedDifficulty).filter(Boolean).length;

  useEffect(() => {
    // If all checkboxes are unchecked, set all of them to checked initially
    if (selectedCount === 0) {
      setSelectedDifficulty({
        easy: false,
        medium: false,
        hard: false,
      });
    }
  }, [selectedCount]);

  return (
    <>
      <div>
        <div className="heading">
          <p>Choose your preferences</p>
        </div>
        <div className="sidebar">
          <div className="difficulty">
            <h4>DIFFICULTY</h4>
            <br />
            <div className="checkboxes">
              <input
                type="checkbox"
                id="easy"
                value="Easy"
                checked={selectedDifficulty.easy}
                onChange={() => handleCheckboxChange('easy')}
              />
              <label htmlFor="easy">Easy</label>
              <br />
              <input
                type="checkbox"
                id="medium"
                value="Medium"
                checked={selectedDifficulty.medium}
                onChange={() => handleCheckboxChange('medium')}
              />
              <label htmlFor="medium">Medium</label>
              <br />
              <input
                type="checkbox"
                id="hard"
                value="Hard"
                checked={selectedDifficulty.hard}
                onChange={() => handleCheckboxChange('hard')}
              />
              <label htmlFor="hard">Hard</label>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Questions selectedDifficulty={selectedDifficulty} />
    </>
  );
}

export default Sidebar;
