import { API_BASE_URL } from "@/api/Constants.js";

export const fetchAppointmentStats = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}appointments/stats/count/`,
      {},
    );
    return await response.json();
  } catch (error) {
    console.log("Error fetching appointments stats:", error);
  }
};
