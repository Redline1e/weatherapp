"use client";
import getWeather from "@/api/weather";
import { WeatherData } from "@/types/types";
import React, { useEffect, useState } from "react";

function WeatherRow() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weather = await getWeather();
      setWeather(weather);
    };

    fetchWeather();
  }, []);

  if (weather === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather in {weather.resolvedAddress}</h2>
    </div>
  );
}

export default WeatherRow;
