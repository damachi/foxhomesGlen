import { API_BASE_URL } from "./Constants.js";

export const fetchAllProperties = async () => {
  const response = await fetch(API_BASE_URL + "properties/partial/");

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

export const fetchPropertiesShort = async () => {
  const response = await fetch(API_BASE_URL + "properties/short/");

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

export const addProperty = async (property) => {
  const response = await fetch(`${API_BASE_URL}properties/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(response.statusText || "Failed to submit property");
    error.statusText = response.statusText;
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

export const fetchPropertyByUsage = async (usedFor) => {
  const response = await fetch(
    `${API_BASE_URL}properties/partial/${usedFor}/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      response.statusText || "Failed to get property information",
    );
    error.statusText = response.statusText;
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

export const fetchPropertybyFilter = async (usedFor, formData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}properties/?property_type=${formData.type}&used_for=${usedFor}&status=available&nb_bedroom=${formData.room}&price=${formData.price_range}`,
      {},
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching property by filter:", error);
  }
};

export const fetchPropertyPriceByRange = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}properties/price/range/`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching properties price range:", error);
  }
};

export const fetchPropertyType = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}properties/type/count/`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching propertyType:", error);
  }
};

export const fetchPropertyBedroom = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}properties/bedrooms/count/`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching property Bedrooms:", error);
  }
};

export const fetchPropertyDetails = async (slug) => {
  const response = await fetch(API_BASE_URL + `properties/${slug}/full/`);

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

export const fetchPropertyBySimilarity = async (usedFor, type) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}properties/?property_type=${type}&used_for=${usedFor}&status=available`,
      {},
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching property by filter:", error);
  }
};

export const fetchPropertyStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}properties/stats/count/`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching property stats:", error);
  }
};
