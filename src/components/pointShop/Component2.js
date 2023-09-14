import styled from "styled-components";

const Component2Child = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 9.98px;
  background-color: var(--color-white);
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: 0.1em;
  line-height: 34px;
  font-family: var(--paragraph-3);
  color: var(--color-white);
  text-align: center;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.03);
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-9xs) var(--padding-13xl);
  background-color: var(--color-goldenrod);
  position: absolute;
  height: 11.42%;
  width: 28.53%;
  top: 77.85%;
  right: 35.58%;
  bottom: 10.73%;
  left: 35.9%;
  border-radius: var(--br-3xs);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
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
}
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
  height: 19.72%;
  width: 84.94%;
  top: 55.71%;
  left: 7.69%;
  line-height: 28px;
  display: flex;
  align-items: center;
`;
const FlatColorIconsshop = styled.img`
  position: absolute;
  height: 24.22%;
  width: 22.44%;
  top: 24.57%;
  right: 38.78%;
  bottom: 51.21%;
  left: 38.78%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 4.54%;
  width: 4.21%;
  top: 11.57%;
  right: 9.11%;
  bottom: 83.89%;
  left: 86.68%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const Component2Root = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 312px;
  height: 289px;
  text-align: center;
  font-size: var(--paragraph-2-size);
  color: var(--label-color-light-primary);
  font-family: var(--font-noto-sans-kr);
  
`;
const Component2 = ({ onClose }) => {
  return (
    <Component2Root>
      <Component2Child />
      <Wrapper onClick={onClose}>
        <Div>확인</Div>
      </Wrapper>
      <Div1>
        <Txt>
          <P>
            <B>포인트 샵으로 이동합니다</B>
          </P>
          <P>보유 포인트 : 4,230</P>
        </Txt>
      </Div1>
      <FlatColorIconsshop alt="" src="/쇼핑몰.png" />
      <VectorIcon alt="" src="/Vector (1).png" onClick={onClose} />
    </Component2Root>
  );
};

export default Component2;
