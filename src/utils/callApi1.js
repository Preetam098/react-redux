import axios from "axios";
import { toast } from "react-toastify";

// to update token without reload page
let getToken;
export const setToken = (token) => {
  getToken = token;
};

// axios
export const API_REQUEST = async (props) => {
  const selectedLocation = localStorage.getItem("current-city") || "";
  const { url, method, data, headers, params, isErrorToast = true } = props;
  const accessToken = localStorage.getItem("access-token");
  const requestOptions = {
    url,
    method,
    headers: {
      Authorization: `Bearer ${getToken || accessToken}`,
      "X-User-Location": selectedLocation,
      ...headers,
    },
    params: method === "GET" ? params : undefined,
    data: method !== "GET" ? data : undefined,
  };
  try {
    const response = await axios(requestOptions);
    if (method !== "GET") {
      // Dismiss all existing toasts
      toast.dismiss();
      toast.success(response?.data?.notification);
    }
    return response?.data;
  } catch (error) {
    toast.dismiss();
    if (isErrorToast) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (
          (error.response.status === 400 || error.response.status === 422) &&
          error.response.data.errors
        ) {
          const errorMessages = Object.values(
            error.response.data.errors
          ).flat();
          errorMessages.forEach((errorMessage) => toast.error(errorMessage));
        } else if (error.response.status === 500) {
          toast.error("Server error");
        } else {
          error?.response?.data?.notification &&
            error?.response?.data?.notification != "UnAuthenticated" &&
            toast.error(error?.response?.data?.notification);
        }
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("Error:", error.message);
      }
    }
    throw error.response; // Re-throw the error to propagate it further if needed
  }
};

// to check authentication
export const isAuth = () => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("access-token");
    return getToken || accessToken ? true : false;
  }
};

// get currentRole
export const getCurrentRole = () => {
  if (typeof window !== "undefined") {
    const currentRole = localStorage.getItem("currentRole");
    return currentRole || "Buyer";
  }
};

export const defaultRole = "Buyer";

//  type is 1 for rent and 2 for buy
export const getTypeForView = () => {
  const typeView = localStorage.getItem("type-view");
  return typeView;
};

// for sell Function
export const isForSell = (type) => {
  return type == 2;
};

// mnage query of checkout
export const setCheckOutQuery = (query) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("checkoutQuery", JSON.stringify(query));
  }
};

export const getCheckOutQuery = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("checkoutQuery");
    return data ? JSON.parse(data) : {};
  }
};

// mnage query of checkout
export const setOrderPlacedData = (query) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("orderPlacedData", JSON.stringify(query));
  }
};

export const getOrderPlacedData = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("orderPlacedData");
    return data ? JSON.parse(data) : {};
  }
};

export const removeOrderPlacedData = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("payload");
    localStorage.removeItem("order_data");
    localStorage.removeItem("checkoutQuery");
    localStorage.removeItem("orderPlacedData");
    return;
  }
};
