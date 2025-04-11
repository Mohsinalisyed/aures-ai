import { axios } from "../lib";

export const getPortfolio = async () => {
  try {
    const response = await axios.get("/users/portfolio");
    return response.data.portfolio[0];
  } catch (error) {
    console.error("Error fetching /portfolio:", error);
    throw error;
  }
};