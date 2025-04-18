import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.com'; // Replace with actual base URL

export const getTopUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/top-users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top users:", error);
    return [];
  }
};

export const getTrendingPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/trending-posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    return [];
  }
};
