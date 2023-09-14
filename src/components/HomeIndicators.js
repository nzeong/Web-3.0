import styled from "styled-components";

const Color = styled.div`
  position: absolute;
  bottom: 8px;
  left: calc(50% - 67px);
  border-radius: var(--br-81xl);
  background-color: var(--label-color-light-primary);
  width: 134px;
  height: 5px;
  display: none;
`;
const HomeIndicatorsRoot = styled.div`
  position: absolute;
  bottom: -1px;
  left: calc(50% - 180px);
  background-color: var(--color-white);
  width: 360px;
  height: 34px;
  overflow: hidden;
`;
const HomeIndicators = () => {
  return (
    <HomeIndicatorsRoot>
      <Color />
    </HomeIndicatorsRoot>
  );
};

export default HomeIndicators;
