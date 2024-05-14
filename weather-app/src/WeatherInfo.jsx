import React from 'react';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const CityHeader = styled.h2`
  color: #333;
`;

const WeatherDetail = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.5;
`;


function WeatherInfo({ data }) {
  if (!data) return <p>Ingen väderinformation tillgänglig</p>;

  return (
    <Container>
      <CityHeader>Väder i {data.name}</CityHeader>
      <WeatherIcon iconCode={data.weather[0].icon} />
      <WeatherDetail>Temperatur: {data.main.temp}°C</WeatherDetail>
      <WeatherDetail>Väder: {data.weather[0].main}</WeatherDetail>
      <WeatherDetail>Luftfuktighet: {data.main.humidity}%</WeatherDetail>
      <WeatherDetail>Vindhastighet: {data.wind.speed} m/s</WeatherDetail>
    </Container>
  );
}

export default WeatherInfo;