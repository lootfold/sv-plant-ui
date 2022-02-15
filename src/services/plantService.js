import axios from "axios";
import { toast } from "react-toastify";

// const baseUrl = "https://svplant.azurewebsites.net/api/plants";
const baseUrl = "/api/plants";

axios.interceptors.response.use(null, (error) => {
  const message =
    error?.response?.data?.message || "An unexpected error occured.";
  toast.error(message, {
    autoClose: 2000,
    hideProgressBar: true,
  });
});

const plantService = {
  getPlants: async () => {
    const { data } = await axios.get(baseUrl);
    return data;
  },
  startWatering: async (plantId) => {
    const url = `${baseUrl}/${plantId}/start`;
    const { status } = await axios.post(url);
    if (status === 200) return true;
  },
  stopWatering: async (plantId) => {
    const url = `${baseUrl}/${plantId}/stop`;
    const { status } = await axios.post(url);
    if (status === 200) return true;
  },
};

export default plantService;
