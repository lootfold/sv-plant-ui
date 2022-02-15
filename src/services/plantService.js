import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = "https://localhost:5001/api/plants";

axios.interceptors.response.use(null, (error) => {
  const message =
    error?.response?.data?.message || "An unexpected error occured.";
  toast.error(message);
});

const plantService = {
  getPlants: async () => {
    const { data } = await axios.get(baseUrl);
    return data;
  },
  startWatering: async (plantId) => {
    const url = `${baseUrl}/${plantId}/start`;
    await axios.post(url);
  },
  stopWatering: async (plantId) => {
    const url = `${baseUrl}/${plantId}/stop`;
    await axios.post(url);
  },
};

export default plantService;
