import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  color: whitesmoke;
  background-color: black;
`;

const FooterLink = styled.a`
  color: lightblue;

  &:hover {
    color: white; // Lägg till en hover-effekt om du vill
  }
`;

function Footer() {
    return (
      <StyledFooter>
        Besök mitt GitHub på{" "}
        <FooterLink
          href="https://github.com/ispeakfishlanguage"
          target="_blank"
          rel="noopener noreferrer"
        >
          ispeakfishlanguage
        </FooterLink>
      </StyledFooter>
    );
  }
  
  export default Footer;  