// questionsUtils.js
const organizeData = (questions) => {
    const organizedData = {
      easy: [],
      medium: [],
      hard: [],
    };
  
    questions.forEach((question) => {
      switch (question.difficulty.toLowerCase()) {
        case 'easy':
          organizedData.easy.push(question.name);
          break;
        case 'medium':
          organizedData.medium.push(question.name);
          break;
        case 'hard':
          organizedData.hard.push(question.name);
          break;
        default:
          break;
      }
    });
  
    return organizedData;
  };
  
  export { organizeData };
  