import axios from "axios";
import { apikey } from "../constants";

const forecastEndpoint = (params) =>
  `http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const locationsEndpoint = (params) =>
  `http://api.weatherapi.com/v1/search.json?key=${apikey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err);
    return null;
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forecastEndpoint(params));
};

export const fetchLocations = (params) => {
  return apiCall(locationsEndpoint(params));
};
