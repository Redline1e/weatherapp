import axios from "axios";

const getWeather = async () => {
  try {
    const response = await axios.get(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kyiv?unitGroup=us&key=PY68YX3F9MQNE2DHS3UT9WFFK&contentType=json"
    );
    return response.data;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export default getWeather;
