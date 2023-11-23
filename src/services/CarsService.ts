export const getCars = async () => {
  try {
    const response = await fetch('http://localhost:3001/cars');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
