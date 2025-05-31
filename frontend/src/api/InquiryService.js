import { API_BASE_URL } from "@/api/Constants.js";

export const fetchInquiryStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}inquiries/stats/count/`, {});
    return await response.json();
  } catch (error) {
    console.log("Error fetching inquiries stats:", error);
  }
};
