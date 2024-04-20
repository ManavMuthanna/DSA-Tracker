import React, { useState, useEffect } from "react";
import { RiCheckboxCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import "../questions/questions.css";
import { organizeData, fetchData, addUserQuestions } from '../questions/questionsUtil';

function Questions({ selectedDifficulty = {} }) {
  const [organizedData, setOrganizedData] = useState({
    easy: [],
    medium: [],
    hard: [],
  });

  useEffect(() => {
    const getDataAndOrganize = async () => {
      try {
        const questions = await fetchData();
        const organizedData = organizeData(questions);

        // Update the state with the organized data
        setOrganizedData(organizedData);
      } catch (error) {
        // Handle errors
        console.error('Error:', error);
      }
    };

    // Call the function when the component mounts
    getDataAndOrganize();
  }, []); // Empty dependency array ensures the function is only called once

  const [checkedQuestions, setCheckedQuestions] = useState({
    easy: Array(organizedData.easy.length).fill(false),
    medium: Array(organizedData.medium.length).fill(false),
    hard: Array(organizedData.hard.length).fill(false),
  });



  const calculateProgress = (difficulty) => {
    const totalQuestions = organizedData[difficulty].length;
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
  // console.log(allDifficultiesUnchecked);
  
  // Define a function to find the checked questions
const findCheckedQuestions = () => {
  const checkedQuestionsArray = [];

  // Loop through each difficulty category
  Object.entries(checkedQuestions).forEach(([difficulty, questions]) => {
    // Loop through each question in the current difficulty category
    questions.forEach((isChecked, index) => {
      // If the question is checked, add it to the list of checked questions
      if (isChecked) {
        checkedQuestionsArray.push(
          organizedData[difficulty][index],
        );
      }
    });
  });

  return checkedQuestionsArray;
};

// Get the checked questions array
const checkedQuestionsArray = findCheckedQuestions();

useEffect(() => {
  // Define a function to add questions
  const addQuestions = async () => {
    try {
      // Make the request to add questions only if checkedQuestionsArray is not empty
      if (checkedQuestionsArray.length > 0) {
        const addingQuestions = await addUserQuestions(checkedQuestionsArray);
        
        // Log the response
        console.log(addingQuestions);
      } else {
        console.log('No questions to add');
      }
    } catch (error) {
      // Handle errors
      console.error('Error adding questions:', error);
    }
  };

  // Call the function to add questions whenever checkedQuestionsArray changes
  addQuestions();
}, [checkedQuestionsArray]); // Dependency on checkedQuestionsArray


  return (
    <>
      <div className="table-div">
        {allDifficultiesUnchecked ? (
          <div className="no-questions"><h2>No questions to recommend</h2></div>
        ) : (
          Object.entries(organizedData).map(
            ([difficulty, questions]) =>
              selectedDifficulty?.[difficulty] && (
                <div className="question-table" key={difficulty}>
                  <h2 style={{ userSelect: "none" }}>
                    {" "}
                    {difficulty.toUpperCase()} {calculateProgress(difficulty)}
                  </h2>
                  <table className="difficulty-table">
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
