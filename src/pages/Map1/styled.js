import styled from "styled-components";

export const Iframe = styled.iframe`
  border: none;
  position: absolute;
  top: 89px;
  left: 0px;
  width: 360px;
  height: 691px;
  overflow: hidden;
  background-image: url("/public/@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
export const Home = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  width: 360px;
  height: 780px;
  overflow: hidden;
`;
export const MapRoot = styled.div`
  position: relative;
  width: 100%;
  height: 780px;
`;