import React, { useState} from "react";
import "../sidebar/sidebar.css";
import Questions from "../questions/questions";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

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

  const CheckboxComponent = ({ checked, onClick }) =>
    checked ? (
      <ImCheckboxChecked
        className="sidebar-input"
        color="#030637"
        // type="checkbox"
        onClick={onClick}
      />
    ) : (
      <ImCheckboxUnchecked
        className="sidebar-input"
        color="#030637"
        // type="checkbox"
        onClick={onClick}
      />
    );

  return (
    <>
      <div className="sidebar-comp">
        <div className="sidebar-heading">
          <p>Choose your preferences</p>
        </div>
        <div className="sidebar">
          <div className="sidebar-difficulty">
            <h4 style={{fontSize:"larger"}}>DIFFICULTY</h4>
            <br />
            <div className="checkboxes">
              <div className="diff-checkbox-row">
                <CheckboxComponent
                  checked={selectedDifficulty.easy}
                  onClick={() => handleCheckboxChange("easy")}
                />
                <label
                  className="sidebar-label"
                  htmlFor="easy"
                  style={{ userSelect: "none" }}
                >
                  Easy
                </label>
              </div>
              <div className="diff-checkbox-row">
              <CheckboxComponent
                  checked={selectedDifficulty.medium}
                  onClick={() => handleCheckboxChange("medium")}
                />
                <label
                  className="sidebar-label"
                  htmlFor="medium"
                  style={{ userSelect: "none" }}
                >
                  Medium
                </label>
              </div>
              <div className="diff-checkbox-row">
              <CheckboxComponent
                  checked={selectedDifficulty.hard}
                  onClick={() => handleCheckboxChange("hard")}
                />
                <label
                  className="sidebar-label"
                  htmlFor="hard"
                  style={{ userSelect: "none" }}
                >
                  Hard
                </label>
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
