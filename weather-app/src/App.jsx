import React, { useState, useEffect, useContext, useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import TemperatureScaleSelector from "./TemperatureScaleSelector";
import UVIndex from "./UvIndex";
import LastUpdated from "./LastUpdated";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Säkerställer att appen inte blir alltför bred */
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: smokewhite;
  border-radius: 5px;
  text-align: center; /* Säkerställer att text och inline-element som <knapp> är centrerade */
  color: smokewhite;
  `;

const initialState = {
  city: "",
  weatherData: null,
  isLoading: false,
  fetchError: false,
  lastUpdated: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "FETCH_START":
      return { ...state, isLoading: true, fetchError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
        lastUpdated: new Date(),
      };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, fetchError: true };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.city) return; // Avsluta om staden inte är angiven

    const fetchWeather = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${apiKey}&units=metric&lang=sv`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Väderinformation kunde inte hämtas");
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        console.error(error);
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    fetchWeather();
  }, [state.city]);

  const handleFormSubmit = (cityName) => {
    dispatch({ type: "SET_CITY", payload: cityName });
  };

  return (
    <AppContainer>
      <Header />
      <WeatherForm onFormSubmit={handleFormSubmit} />
      <TemperatureScaleSelector />
      {state.isLoading && <p>Loading...</p>}
      {state.fetchError && (
        <p>Fel vid hämtning av väderinformation. Vänligen försök igen.</p>
      )}
      {state.weatherData && <WeatherInfo data={state.weatherData} />}
      {state.weatherData && <UVIndex index={state.weatherData.uvi} />}
      {state.lastUpdated && <LastUpdated timestamp={state.lastUpdated} />}
      <Footer />
    </AppContainer>
  );
}

export default App;
