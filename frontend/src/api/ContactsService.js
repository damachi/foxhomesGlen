import { API_BASE_URL } from "@/api/Constants.js";
import Cookies from "js-cookie";

const csrftoken = Cookies.get("csrftoken");

export const addContact = async (contact) => {
  const response = await fetch(`${API_BASE_URL}contacts/client/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(contact),
  });

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

export const createNewsletter = async (formData) => {
  const response = await fetch(`${API_BASE_URL}newsletters/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(formData),
  });
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

export const fetchContactStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}contacts/stats/count/`, {});
    return await response.json();
  } catch (error) {
    console.log("Error fetching contacts stats", error);
  }
};
