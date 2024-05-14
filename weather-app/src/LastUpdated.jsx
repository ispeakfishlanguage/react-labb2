import React from 'react';
import styled from 'styled-components';

const UpdateText = styled.p`
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
`;

function LastUpdated({ timestamp }) {
  const updateTime = new Date(timestamp).toLocaleTimeString();
  return <UpdateText>Senast uppdaterad: {updateTime}</UpdateText>;
}

export default LastUpdated;