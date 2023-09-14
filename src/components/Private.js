import styled from "styled-components";

const PrivateChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.98px;
  background-color: var(--color-white);
  width: 312px;
  height: 416px;
`;
const Icon = styled.img`
  position: absolute;
  top: 11px;
  left: 16.68px;
  width: 281.08px;
  height: 335px;
  object-fit: cover;
`;
const PrivateItem = styled.div`
  position: absolute;
  top: 347px;
  left: 40px;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-lightskyblue);
  box-sizing: border-box;
  width: 233px;
  height: 48px;
`;
const Done = styled.div`
  position: absolute;
  top: 359px;
  left: 87px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 139px;
  height: 23px;
`;
const PhxBoldIcon = styled.img`
  position: absolute;
  top: 19px;
  left: 267px;
  width: 20px;
  height: 20px;
  overflow: hidden;
  object-fit: cover;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 23.11px;
  left: 32.11px;
  width: 7.11px;
  height: 11.78px;
  object-fit: cover;
`;
const PrivateRoot = styled.div`
  width: 312px;
  height: 416px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: center;
  font-size: var(--paragraph-2-size);
  color: var(--color-cornflowerblue);
  font-family: var(--font-noto-sans-kr);
`;
const Private = ({ onClose }) => {
  return (
    <PrivateRoot>
      <PrivateChild />
      <Icon alt="" src="/undefined6.png" />
      <PrivateItem />
      <Done>Done</Done>
      <PhxBoldIcon alt="" src="/Vector (1).png" />
      <VectorIcon alt="" src="/undefined8.png" />
    </PrivateRoot>
  );
};

export default Private;
