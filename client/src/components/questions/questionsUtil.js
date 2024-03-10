import axios from 'axios';

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
  
  const fetchData = async () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    try {
      const response = await axios.get(`${baseURL}/questions/all`);
      console.log("Response:", response.data.questions);
      return response.data.questions; // Assuming the backend returns an array of questions
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  export { organizeData, fetchData };
  