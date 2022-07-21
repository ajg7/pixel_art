import styled from "styled-components";

export const PixelGridCanvas = styled.canvas`
  border: 3px solid red;
  width: ${props => props.width};
  height: ${props => props.height};
`;
