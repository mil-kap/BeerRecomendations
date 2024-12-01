import styled from "styled-components";

export const StyledHero = styled.div<{ image: string; }>`
  position: relative;
  height: 50vh;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.white};
  padding: 0 20px; 
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

export const StyledHeader = styled.h1`
  color: ${props => props.theme.colors.white};
  font-family: Playfair Display;
  font-weight: ${props => props.theme.typography.fontWeight.bold};;
  font-size: 4rem;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  z-index: 1;
`;
