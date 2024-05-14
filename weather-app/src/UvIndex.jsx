import React from 'react';
import styled from 'styled-components';

const UVIndexContainer = styled.div`
  padding: 10px;
  background-color: ${({ index }) => index <= 2 ? '#289500' : index <= 5 ? '#F7E400' : index <= 7 ? '#F85900' : '#D80010'};
  color: white;
  text-align: center;
  border-radius: 5px;
  margin-top: 10px;
`;

function UVIndex({ index }) {
  return (
    <UVIndexContainer index={index}>
      <h3>UV-index</h3>
      <p>{index}</p>
    </UVIndexContainer>
  );
}

export default UVIndex;