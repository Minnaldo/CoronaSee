import axios from "axios";

export default axios.create({
  baseURL: "http://13.124.112.221:5353",
  //baseURL: "http://127.0.0.1:8080",
  headers: {
    "Content-type": "application/json",
  }
});