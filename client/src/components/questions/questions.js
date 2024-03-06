import React, { useState } from "react";
import { RiCheckboxCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import "../questions/questions.css";

function Questions({ selectedDifficulty = {} }) {
  const object = {
    easy: ["Two sum", "Balanced Paranthesis"],
    medium: ["Two sum", "Balanced Paranthesis", "Splitwise"],
    hard: ["Two sum", "Balanced Paranthesis"],
  };

  const [checkedQuestions, setCheckedQuestions] = useState({
    easy: Array(object.easy.length).fill(false),
    medium: Array(object.medium.length).fill(false),
    hard: Array(object.hard.length).fill(false),
  });

  const calculateProgress = (difficulty) => {
    const totalQuestions = object[difficulty].length;
    const checkedCount = checkedQuestions[difficulty].filter(Boolean).length;
    return `${checkedCount}/${totalQuestions}`;
  };

  const handleCheckboxChange = (difficulty, index) => {
    setCheckedQuestions((prevCheckedQuestions) => {
      const updatedCheckedQuestions = [...prevCheckedQuestions[difficulty]];
      updatedCheckedQuestions[index] = !updatedCheckedQuestions[index];
      return {
        ...prevCheckedQuestions,
        [difficulty]: updatedCheckedQuestions,
      };
    });
  };

  const allDifficultiesUnchecked =
    selectedDifficulty.easy === false &&
    selectedDifficulty.medium === false &&
    selectedDifficulty.hard === false;
  console.log(allDifficultiesUnchecked);
  return (
    <>
      <div className="table-div">
        {allDifficultiesUnchecked ? (
          <h2>No questions to recommend</h2>
        ) : (
          Object.entries(object).map(
            ([difficulty, questions]) =>
              selectedDifficulty?.[difficulty] && (
                <div className="question-table" key={difficulty}>
                  <h2>
                    {" "}
                    {difficulty.toUpperCase()} {calculateProgress(difficulty)}
                  </h2>
                  <table>
                    <tbody>
                      {questions.map((question, questionIndex) => (
                        <tr
                          key={questionIndex}
                          className={
                            checkedQuestions[difficulty][questionIndex]
                              ? "selected-row"
                              : ""
                          }
                        >
                          <td>{questionIndex + 1}</td>
                          <td>{question}</td>
                          <td className="checkbox-col" style={{ userSelect: "none" }}>
                            {checkedQuestions[difficulty][questionIndex] ? (
                              <RiCheckboxCircleFill
                              size={24}
                              color="darkgreen"
                                onClick={() =>
                                  handleCheckboxChange(
                                    difficulty,
                                    questionIndex
                                  )
                                }
                              />
                            ) : (
                              <RiCheckboxCircleLine
                              size={24}
                              color='gray'
                                onClick={() =>
                                  handleCheckboxChange(
                                    difficulty,
                                    questionIndex
                                  )
                                }
                              />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
          )
        )}
      </div>
    </>
  );
}

export default Questions;
