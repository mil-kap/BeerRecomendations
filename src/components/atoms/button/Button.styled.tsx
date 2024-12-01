import styled from "styled-components";

export const StyledButton = styled.button<{$position?: "left" | "right"}>`
  background-color: ${props => props.theme.colors.primary};
  border-style: none;
  border-radius: ${props => props.theme.borderRadius.xLarge};
  box-sizing: border-box; 
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  display: inline-block;
  padding: 1rem 1.5rem;
  width: 200px;
  align-self: ${props => props.$position === "left" ? "flex-start" : "flex-end"};
  margin: 1rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${props => props.theme.typography.fontSize.base};
  &:hover {
    opacity: 0.7;
    }
`