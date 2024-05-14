import styled from 'styled-components';

const WeatherImage = styled.img`
  width: 50px;
  height: auto;
  border: 1px solid #ccc;
`;

function WeatherIcon({ iconCode }) {
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return <WeatherImage src={iconUrl} alt="Weather icon" />;
}

export default WeatherIcon;