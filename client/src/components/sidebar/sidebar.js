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
        <div className="sidebar-heading">
          <p>Choose your preferences</p>
        </div>
        <div className="sidebar">
          <div className="sidebar-difficulty">
            <h4>DIFFICULTY</h4>
            <br />
            <div className="checkboxes">
              <div className='diff-checkbox-row'>
              <input
              className='sidebar-input'
                type="checkbox"
                id="easy"
                value="Easy"
                checked={selectedDifficulty.easy}
                onChange={() => handleCheckboxChange('easy')}
              />
              <label className='sidebar-label' htmlFor="easy" style={{ userSelect: "none" }}>Easy</label>
              </div>
              <div className='diff-checkbox-row'>
              <input
                className='sidebar-input'
                type="checkbox"
                id="medium"
                value="Medium"
                checked={selectedDifficulty.medium}
                onChange={() => handleCheckboxChange('medium')}
              />
              <label className='sidebar-label' htmlFor="medium" style={{ userSelect: "none" }}>Medium</label>
              </div>
              <div className='diff-checkbox-row'>
              <input
              className='sidebar-input'
                type="checkbox"
                id="hard"
                value="Hard"
                checked={selectedDifficulty.hard}
                onChange={() => handleCheckboxChange('hard')}
              />
              <label className='sidebar-label' htmlFor="hard" style={{ userSelect: "none" }}>Hard</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Questions selectedDifficulty={selectedDifficulty} />
    </>
  );
}

export default Sidebar;
