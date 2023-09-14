import styled from "styled-components";

const Component3Child = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-600);
  box-sizing: border-box;
`;
const FrameChild = styled.div`
  position: relative;
  border-top: 2.6px solid var(--label-color-light-primary);
  box-sizing: border-box;
  width: 35.1px;
  height: 2.6px;
`;
const LineParent = styled.div`
  position: absolute;
  top: 10.4px;
  left: 6.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs);
`;
const Component3Inner = styled.div`
  position: absolute;
  height: 79.59%;
  width: 12.64%;
  top: 4.08%;
  right: 84.03%;
  bottom: 16.33%;
  left: 3.33%;
  background-color: var(--color-white);
  overflow: hidden;
`;
const Component3Item = styled.img`
  position: absolute;
  height: 65.31%;
  width: 8.89%;
  top: 12.24%;
  right: 5%;
  bottom: 22.45%;
  left: 86.11%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  height: 71.43%;
  width: 9.72%;
  top: 6.12%;
  right: 44.72%;
  bottom: 22.45%;
  left: 45.56%;
  background-image: url("/public/6164941@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Component3Root = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  width: 360px;
  height: 49px;
`;
const Component3 = ({ onButtonClick }) => {
  return (
    <Component3Root>
      <Component3Child />
      <Component3Inner>
        <LineParent>
          <FrameChild />
          <FrameChild />
          <FrameChild />
        </LineParent>
      </Component3Inner>
      <Component3Item alt="" src="/QR.png" />
      <Button onClick={onButtonClick} />
    </Component3Root>
  );
};

export default Component3;
