import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SuccessChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.98px;
  background-color: var(--color-white);
  width: 312px;
  height: 285px;
`;
const Div = styled.div`
-webkit-text-stroke: 1px #00000008;
border-color: var(--payment-text);
color: #ffffff;
font-family: "Roboto-Regular", Helvetica;
font-size: 20px;
font-weight: 400;
letter-spacing: 2px;
line-height: 34px;
margin-bottom: -2.5px;
margin-left: -8px;
margin-right: -6px;
margin-top: -6.5px;
position: relative;
text-align: center;
white-space: nowrap;
width: fit-content;
  
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-goldenrod);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  width: 89px;
  height: 33px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs) var(--padding-13xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const SuccessInner = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 220px;
  left: 112px;
  width: 89px;
  height: 33px;
`;
const B = styled.b``;
const P = styled.p`
  margin: 0;
`;
const Txt = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const Div1 = styled.div`
  position: absolute;
  top: 156px;
  left: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  width: 265px;
  height: 57px;
`;
const IconParkcheckOne = styled.img`
  position: absolute;
  top: 51px;
  left: 111px;
  width: 90px;
  height: 90px;
  overflow: hidden;
  object-fit: cover;
`;
const SuccessItem = styled.img`
  position: absolute;
  top: 25px;
  left: 267px;
  width: 20px;
  height: 20px;
  object-fit: cover;
`;
const SuccessRoot = styled.div`
  width: 312px;
  height: 285px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  text-align: center;
  font-size: var(--paragraph-2-size);
  color: var(--label-color-light-primary);
  font-family: var(--font-noto-sans-kr);
`;
const Success = ({ onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <SuccessRoot>
      <SuccessChild />
      <SuccessInner onClick={onFrameButtonClick}>
        <Wrapper>
          <Div>확인</Div>
        </Wrapper>
      </SuccessInner>
      <Div1>
        <Txt>
          <P>
            <B>번개맨님 인증이 완료되었습니다</B>
          </P>
          <P>차감 후 포인트 : 4,230</P>
        </Txt>
      </Div1>
      <IconParkcheckOne alt="" src="/check.png" />
      <SuccessItem alt="" src="/Vector (1).png" />
    </SuccessRoot>
  );
};

export default Success;
