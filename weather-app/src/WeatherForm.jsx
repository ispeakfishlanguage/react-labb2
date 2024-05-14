import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: smokewhite;
`;

const Label = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 20px;
  color: black;
  text-align: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const Loading = styled.div`
  color: #007bff;
`;

const Error = styled.div`
  color: red;
`;

function WeatherForm({ onFormSubmit }) {
    const [city, setCity] = useState('');
  
    const handleChange = (event) => {
      setCity(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onFormSubmit(city);
      setCity('');
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="city">Stad:</Label>
        <Input
          type="text"
          id="city"
          value={city}
          onChange={handleChange}
          placeholder="Sök stad..."
        />
        <SubmitButton type="submit">Sök</SubmitButton>
      </Form>
    );
  }
  
  export default WeatherForm;