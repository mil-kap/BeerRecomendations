import styled from "styled-components";

export const StyledButton = styled.button<{$position?: "left" | "right"}>`
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box; 
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  padding: 1rem 1.5rem;
  width: 200px;
  align-self: ${props => props.$position === "left" ? "flex-start" : "flex-end"};
  margin: 1rem;
  font-weight: 600;
  
  &:hover {
    background-color: #F082AC;
    }
`