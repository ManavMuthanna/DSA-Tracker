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
      // console.log("Response:", response.data.questions);
      return response.data.questions; // Assuming the backend returns an array of questions
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const addUserQuestions = async (questions) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/user/addQ`;
    const username = "manav_m";
    
    try{
      // Make a POST request to the endpoint
      const response = await axios.post(url, {
        username,
        questions,
      });
      return response.data; // Assuming the backend returns a message or confirmation
    } catch (error) {
      console.error('Error adding user questions:', error);
      throw error;
    }
  };
  

  export { organizeData, fetchData, addUserQuestions };
  