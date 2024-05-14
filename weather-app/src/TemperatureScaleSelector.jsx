import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

function TemperatureScaleSelector({ onScaleChange }) {
  return (
    <div>
      <Button onClick={() => onScaleChange('C')}>°C</Button>
      <Button onClick={() => onScaleChange('F')}>°F</Button>
    </div>
  );
}

export default TemperatureScaleSelector;