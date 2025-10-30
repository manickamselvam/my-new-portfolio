import axiosClient from "./axiosClient";
import { notifyError } from "../utils/toastService";
const formApi = {
  formSubmit: async (data) => {
    try {
      let res = axiosClient.post("/api/send-form", data);
      return res;
    } catch (err) {
      notifyError("Failed to send messgae please retry after some time");
      console.log("Error in form API :", err);
    }
  },
  // (data) => axiosClient.post("/api/send-form", data),
};

export default formApi;
