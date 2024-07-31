import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  let RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
  let HOT_URL =
    "https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg?auto=compress&cs=tinysrgb&w=600";
  let COLD_URL =
    "https://images.pexels.com/photos/760971/pexels-photo-760971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="InfoBox">
      <h1>Weather = {capitalizeFirstLetter(info.weather)}</h1>
      <div className="Card">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp >= 25
                  ? HOT_URL
                  : COLD_URL
              }
              alt="weather"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span>Temperature = {info.temp}&deg;C</span>
                <br />
                <span>Humidity = {info.humidity}%</span>
                <br />
                <span>Min Temp = {info.tempMin}&deg;C</span>
                <br />
                <span>Max Temp = {info.tempMax}&deg;C</span>
                <br />
                <span>Feels Like = {info.feelsLike}&deg;C</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
