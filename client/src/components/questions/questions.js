import React, { useState, useEffect } from "react";
import { RiCheckboxCircleLine, RiCheckboxCircleFill } from "react-icons/ri";
import "../questions/questions.css";
import {
  organizeData,
  fetchData,
  addUserQuestions,
  fetchUserQuestions,
} from "../questions/questionsUtil";

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
        console.error("Error:", error);
      }
    };

    // Call the function when the component mounts
    getDataAndOrganize();
  }, []); // Empty dependency array ensures the function is only called once

  // console.log("Question Data: ", organizedData);

  useEffect(() => {
    // Define the function inside the useEffect callback
    const constructCheckedQuestionsObject = async (userQuestions) => {
      const checkedQuestionsObject = {
        easy: Array(organizedData.easy.length).fill(false),
        medium: Array(organizedData.medium.length).fill(false),
        hard: Array(organizedData.hard.length).fill(false)
      };
    
      // Define a helper function to set the value to true in the checkedQuestionsObject
      const setTrue = (index, category) => {
        checkedQuestionsObject[category][index] = true;
      };
    
      // Loop through each question in the userQuestions array
      userQuestions.forEach((question) => {
        // Find the index of the question in each category array
        const easyIndex = organizedData.easy.indexOf(question);
        const mediumIndex = organizedData.medium.indexOf(question);
        const hardIndex = organizedData.hard.indexOf(question);
    
        // If the question is found in a category, set its value to true in the corresponding category array
        if (easyIndex !== -1) {
          setTrue(easyIndex, 'easy');
        }
        if (mediumIndex !== -1) {
          setTrue(mediumIndex, 'medium');
        }
        if (hardIndex !== -1) {
          setTrue(hardIndex, 'hard');
        }
      });
    
      return checkedQuestionsObject;
    };
  
    const fetchQuestionsfromUser = async () => {
      try {
        const userQuestions = await fetchUserQuestions();
        const userQuestionsArray = userQuestions.questions;
        const checkedQuestionsObject = await constructCheckedQuestionsObject(userQuestionsArray);
        setCheckedQuestions(checkedQuestionsObject);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchQuestionsfromUser();
  }, [organizedData]);
  

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

  // console.log("Checkeed Ques:", checkedQuestions);

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
          checkedQuestionsArray.push(organizedData[difficulty][index]);
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
          // console.log('No questions to add');
        }
      } catch (error) {
        // Handle errors
        console.error("Error adding questions:", error);
      }
    };

    // Call the function to add questions whenever checkedQuestionsArray changes
    addQuestions();
  }, [checkedQuestionsArray]); // Dependency on checkedQuestionsArray

  // console.log("Checked Ques Arr: ", checkedQuestionsArray);

  return (
    <>
      <div className="table-div">
        {allDifficultiesUnchecked ? (
          <div className="no-questions">
            <h2>No questions to recommend</h2>
          </div>
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
                          <td
                            className="checkbox-col"
                            style={{ userSelect: "none" }}
                          >
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
                                color="gray"
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
