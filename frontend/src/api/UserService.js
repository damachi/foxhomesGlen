import { API_BASE_URL } from "@/api/Constants.js";

export const fetchUsersStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}users/stats/count/`, {});
    return await response.json();
  } catch (error) {
    console.error("Error fetching user stats:", error);
  }
};
