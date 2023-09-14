import styled from "styled-components";

const Iphone13Mini = styled.img`
  position: absolute;
  top: 28px;
  left: 453px;
  width: 375px;
  height: 777px;
  overflow: hidden;
  object-fit: cover;
`;
const StartRoot = styled.div`
  position: relative;
  background-color: #000;
  width: 100%;
  height: 832px;
  overflow: hidden;
`;
const Start = () => {
  return (
    <StartRoot>
      <Iphone13Mini alt="" src="/undefined.png" />
    </StartRoot>
  );
};

export default Start;
