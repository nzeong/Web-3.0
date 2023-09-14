import styled from "styled-components";

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  border: 1.5px solid var(--color-goldenrod);
  box-sizing: border-box;
  width: 158px;
  height: 97px;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 168px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  border: 1.5px solid var(--color-goldenrod);
  box-sizing: border-box;
  width: 158px;
  height: 97px;
`;
const Div = styled.div`
  position: absolute;
  top: 10px;
  left: 13px;
  line-height: 22px;
  font-weight: 500;
`;
const Div1 = styled.div`
  position: absolute;
  top: 73px;
  left: 13px;
  font-size: var(--font-size-4xs);
  line-height: 18px;
  color: var(--neutral-500);
`;
const Div2 = styled.div`
  position: absolute;
  top: 10px;
  left: 182px;
  line-height: 22px;
  font-weight: 500;
`;
const Icon = styled.img`
  position: absolute;
  top: 29px;
  left: 25px;
  width: 38px;
  height: 38px;
  object-fit: cover;
`;
const B = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 18px;
  display: flex;
  align-items: center;
  width: 57px;
  height: 21px;
`;
const Span = styled.span``;
const Cht1 = styled.span`
  font-size: var(--font-size-xs);
`;
const Cht = styled.b`
  position: absolute;
  top: 1.5px;
  left: 156px;
  line-height: 18px;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 39px;
  left: 77px;
  width: 237px;
  height: 21px;
  font-size: var(--font-size-xl);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 123px;
  left: 17px;
  width: 326px;
  height: 97px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--label-color-light-primary);
  font-family: var(--font-noto-sans-kr);
`;
const ScoreCard = () => {
  return (
    <RectangleParentRoot>
      <FrameChild />
      <FrameItem />
      <Div>충전 습관 점수</Div>
      <Div1>배터리 수명이 13% 아껴지고 있어요!</Div1>
      <Div2>포인트 토큰</Div2>
      <Icon alt="" src="/undefined24.png" />
      <Parent1>
        <B>89 점</B>
        <Cht>
          <Span>{`4,230 `}</Span>
          <Cht1>CHT</Cht1>
        </Cht>
      </Parent1>
    </RectangleParentRoot>
  );
};

export default ScoreCard;
