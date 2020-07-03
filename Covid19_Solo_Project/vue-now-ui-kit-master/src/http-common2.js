import axios from "axios";

export default axios.create({
  baseURL: "http://api.openweathermap.org",
  //baseURL: "http://127.0.0.1:8080",
  headers: {
    "Content-type": "application/json",
  }
});