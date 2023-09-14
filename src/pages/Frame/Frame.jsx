import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component3 from "../../components/Component3";
import HomeIndicators from "../../components/HomeIndicators";
import { Home,
  B,
  FrameChild,
  Div1,
  Div2,
  Span2,
  Span,
  Div3,
  Parent1,
  LineParent,
  FrameItem,
  Div4,
  P,
  Point,
  Div6,
  LineGroup,
  FrameInner,
  Point2,
  Span1,
  Point1,
  Point3,
  LineContainer,
  LineDiv,
  Point6,
  FrameDiv,
  DivRoot
} from "./styled";

export const Frame = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <DivRoot>
      <Home>
        <Component3 onButtonClick={onButtonClick} />
        
        <HomeIndicators />
      </Home>
      <B>알림</B>
      <LineParent>
        <FrameChild />
        <Parent1>
          <Div1>2023.09.08</Div1>
          <Div2>검사가 완료되었습니다.</Div2>
          <Div3>
            <Span2>{`배터리 수명 : `}</Span2>
            <Span>98 %</Span>
          </Div3>
        </Parent1>
      </LineParent>
      <LineGroup>
        <FrameItem />
        <Div4>2023.08.31</Div4>
        <Point>
          <P>배터리가 50% 미만입니다. 건강한 배터리</P>
          <P>충전습관을 위해서 지금 충전하세요.</P>
        </Point>
        <Div6>근처 충전소 찾기</Div6>
      </LineGroup>
      <LineContainer>
        <FrameInner />
        <Div4>2023.07.08</Div4>
        <Point>
          <P>축하드립니다. 지난달 건강한 충전습관으로</P>
          <Point1>
            <Point2>80 point</Point2>
            <Span1> 적립되었습니다</Span1>
          </Point1>
        </Point>
        <Point3>point 사용처 보기</Point3>
      </LineContainer>
      <FrameDiv>
        <LineDiv />
        <Div4>2023.06.08</Div4>
        <Point>
          <P>축하드립니다. 지난달 건강한 충전습관으로</P>
          <P>100 point 적립되었습니다</P>
        </Point>
        <Point6>point 사용처 보기</Point6>
      </FrameDiv>
    </DivRoot>
  );
};


