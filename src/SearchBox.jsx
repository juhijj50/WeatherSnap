import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3cd513eb813a80acaafbf868267fc8ce";

  const getWeatherinfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const changeCity = (evt) => {
    setCity(evt.target.value);
    setError(false);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      getWeatherinfo();
      setCity("");
      let newInfo = await getWeatherinfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Place"
          variant="outlined"
          required
          value={city}
          onChange={changeCity}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p>No such place exists. Please try an actual name.</p>}
      </form>
    </div>
  );
}
