import axios from "axios";

export const getAllHomeStays = async () => {
  const response = await axios.get("https://auf.my.id/homestays");
  return response.data;
};
