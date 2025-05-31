import { API_BASE_URL } from "@/api/Constants.js";

export const fetchAllAmenities = async () => {
  const response = await fetch(`${API_BASE_URL}amenities/`);
  const data = await response.json();

  if (!response.ok) {
    const error = new Error(response.statusText);
    error.statusText = response.statusText;
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
};
