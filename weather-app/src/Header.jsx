import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 20px;
  color: black;
`;

const Title = styled.h1``;

function Header() {
    return (
      <StyledHeader>
        <Title>Weather App</Title>
      </StyledHeader>
    );
  }
  
  export default Header;