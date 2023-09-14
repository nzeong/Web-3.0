import { useState, useCallback, useEffect } from "react";
import Success from "./Success";
import PortalPopup from "./PortalPopup";
import Shop from "./Shop";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const animationSlideInLeft = keyframes`
    0% {
        transform: translateX(-200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
  `;
const SidebarrChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 0px 0px 0px var(--br-mini);
  background-color: var(--color-white);
`;
const Div = styled.div`
  position: absolute;
  top: 42.82%;
  left: 7.86%;
  color: var(--color-gray-200);
`;
const Div1 = styled.div`
  position: absolute;
  top: 68.83%;
  left: 7.86%;
  color: var(--color-gray-200);
`;
const Image2 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  height: 2.27%;
  width: 13.57%;
  top: 79%;
  right: 8.21%;
  bottom: 18.73%;
  left: 78.21%;
  background-image: url("/public/image-2@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Div2 = styled.div`
  position: absolute;
  top: 78.86%;
  left: 7.86%;
  color: var(--color-gray-200);
`;
const Div3 = styled.div`
  position: absolute;
  height: 2.44%;
  width: 18.21%;
  top: 42.82%;
  left: 75.36%;
  color: var(--color-orange);
  text-align: right;
  display: inline-block;
`;
const Div4 = styled.div`
  position: absolute;
  height: 2.44%;
  width: 18.21%;
  top: 47.02%;
  left: 75.71%;
  color: var(--color-orange);
  text-align: right;
  display: inline-block;
`;
const P = styled.p`
  margin: 0;
`;
const P1 = styled.p`
  margin: 0;
  font-size: 11px;
`;
const Div5 = styled.div`
  position: absolute;
  top: 46.48%;
  left: 7.86%;
  line-height: 18px;
  color: var(--color-gray-200);
`;
const PhxBoldIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  overflow: hidden;
  object-fit: cover;
`;
const PhxBoldWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  height: 2.71%;
  width: 7.14%;
  top: 2.57%;
  right: 6.43%;
  bottom: 94.72%;
  left: 86.43%;
`;
const B = styled.b`
  position: absolute;
  height: 3.93%;
  width: 39.64%;
  top: 37.26%;
  left: 6.79%;
  font-size: var(--paragraph-2-size);
  line-height: 16px;
  display: flex;
  align-items: center;
`;
const Div6 = styled.div`
  position: relative;
  line-height: 16px;
  font-weight: 100;
  display: flex;
  align-items: center;
  width: 111px;
  height: 29px;
  flex-shrink: 0;
`;
const Div7 = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 16px;
  color: var(--color-orange);
  text-align: right;
  display: flex;
  align-items: center;
  width: 111px;
  height: 29px;
  flex-shrink: 0;
`;
const Parent1 = styled.div`
  position: absolute;
  height: 3.93%;
  width: 84.29%;
  top: 29.67%;
  right: 8.93%;
  bottom: 66.4%;
  left: 6.79%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px;
  font-size: var(--font-size-sm);
`;
const B1 = styled.b`
  position: absolute;
  height: 3.93%;
  width: 39.64%;
  top: 63.01%;
  left: 6.79%;
  font-size: var(--paragraph-2-size);
  line-height: 16px;
  display: flex;
  align-items: center;
`;
const FaSolidbarcodeIcon = styled.img`
  position: absolute;
  height: 10.84%;
  width: 71.43%;
  top: 15.72%;
  right: 14.29%;
  bottom: 73.44%;
  left: 14.29%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const SidebarrItem = styled.div`
  position: absolute;
  height: 0.07%;
  width: 85.91%;
  top: 35.74%;
  right: 7.03%;
  bottom: 64.19%;
  left: 7.05%;
  border-top: 0.5px solid var(--color-gray-300);
  box-sizing: border-box;
`;
const SidebarrInner = styled.div`
  position: absolute;
  height: 0.14%;
  width: 100.36%;
  top: 7.25%;
  right: -0.18%;
  bottom: 92.62%;
  left: -0.18%;
  border-top: 1px solid var(--color-gray-300);
  box-sizing: border-box;
`;
const LineDiv = styled.div`
  position: absolute;
  height: 0.07%;
  width: 85.91%;
  top: 60.94%;
  right: 7.39%;
  bottom: 38.99%;
  left: 6.7%;
  border-top: 0.5px solid var(--color-gray-300);
  box-sizing: border-box;
`;
const B2 = styled.b`
  position: absolute;
  top: calc(50% - 10.5px);
  left: calc(50% - 30px);
  font-size: var(--paragraph-3-size);
  line-height: 22px;
  font-family: var(--font-noto-sans-kr);
  color: var(--label-color-light-primary);
  text-align: left;
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color-goldenrod);
  position: absolute;
  height: 4.74%;
  width: 83.57%;
  top: 54.2%;
  right: 8.57%;
  bottom: 41.06%;
  left: 7.86%;
  border-radius: var(--br-8xs);
  overflow: hidden;
`;
const Div8 = styled.div`
  position: relative;
  line-height: 16px;
  color: #000000;
font-family: "Noto Sans KR-Regular", Helvetica;
font-size: 14.4px;
font-weight: 400;
letter-spacing: 0;
height: 16px;
width: 45px;
}
`;
const VectorIcon = styled.img`
  position: relative;
  width: 7.11px;
  height: 12.78px;
  object-fit: cover;
`;
const Group = styled.div`
  position: absolute;
  height: 2.17%;
  width: 20.83%;
  top: 11.65%;
  right: 62.02%;
  bottom: 86.18%;
  left: 17.14%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-size: var(--paragraph-2-size);
`;
const ClaritysettingsLineIcon = styled.img`
  position: relative;
  width: 25px;
  height: 25px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 81.25%;
  width: 74.99%;
  top: 9.38%;
  right: 12.51%;
  bottom: 9.38%;
  left: 12.5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Phbell = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  width: 25px;
  height: 25px;
  overflow: hidden;
  flex-shrink: 0;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 89.58%;
  width: 84.02%;
  top: 5.21%;
  right: 7.99%;
  bottom: 5.21%;
  left: 7.99%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const SolarshopBroken = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ClaritysettingsLineParent = styled.div`
  position: absolute;
  height: 3.39%;
  width: 35%;
  top: 2.3%;
  right: 56.43%;
  bottom: 94.31%;
  left: 8.57%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 12px;
`;
const FluentwalletCreditCard24RIcon = styled.img`
  position: absolute;
  height: 3.25%;
  width: 8.57%;
  top: 11.11%;
  right: 84.29%;
  bottom: 85.64%;
  left: 7.14%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Cht = styled.div`
  position: absolute;
  height: 2.17%;
  width: 30%;
  top: 11.65%;
  left: 62.5%;
  font-size: var(--font-size-sm);
  line-height: 16px;
  font-weight: 500;
  text-align: right;
  display: flex;
  align-items: center;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 120.5px);
  border-radius: var(--br-3xs);
  background-color: var(--color-gray-500);
  border: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  width: 241px;
  height: 30px;
`;
const FrameIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 215px;
  width: 11px;
  height: 9px;
  overflow: hidden;
  object-fit: cover;
`;
const FrameDiv = styled.div``;
const FrameWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 18px;
  width: 188px;
  height: 9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Div9 = styled.div`
  position: absolute;
  top: 7px;
  left: 14px;
  display: inline-block;
  width: 153px;
  height: 18px;
`;
const RectangleParent = styled.div`
  position: absolute;
  height: 4.07%;
  width: 86.07%;
  top: 72.76%;
  right: 7.5%;
  bottom: 23.17%;
  left: 6.43%;
  font-size: var(--paragraph-3-size);
`;
const RectangleGroup = styled.div`
  position: absolute;
  height: 4.07%;
  width: 86.07%;
  top: 82.79%;
  right: 7.5%;
  bottom: 13.14%;
  left: 6.43%;
  font-size: var(--paragraph-3-size);
`;
const SidebarrRoot = styled.div`
  width: 280px;
  height: 100%;
  opacity: 0;
  max-width: 90%;
  overflow: auto;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--label-color-light-primary);
  font-family: var(--font-noto-sans-kr);
  &.animate {
    animation: 0.25s ease 0s 1 normal forwards ${animationSlideInLeft};
  }
`;
const Sidebarr = ({ onClose }) => {
  const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
  const [isShopPopupOpen, setShopPopupOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const openSuccessPopup = useCallback(() => {
    setSuccessPopupOpen(true);
  }, []);

  const closeSuccessPopup = useCallback(() => {
    setSuccessPopupOpen(false);
  }, []);

  const onPhbellClick = useCallback(() => {
    navigate("/notice");
  }, [navigate]);

  const openShopPopup = useCallback(() => {
    setShopPopupOpen(true);
  }, []);

  const closeShopPopup = useCallback(() => {
    setShopPopupOpen(false);
  }, []);

  return (
    <>
      <SidebarrRoot data-animate-on-scroll>
        <SidebarrChild />
        <Div>잔여량</Div>
        <Div1>최대충전량</Div1>
        <Image2 />
        <Div2>배터리 잔량 알림</Div2>
        <Div3>100%</Div3>
        <Div4>99%</Div4>
        <Div5>
          <P>잔여수명</P>
          <P1>(마지막 검사 기준)</P1>
        </Div5>
        <PhxBoldWrapper onClick={onFrameButtonClick}>
          <PhxBoldIcon alt="" src="/Vector (1).png" />
        </PhxBoldWrapper>
        <B>배터리</B>
        <Parent1>
          <Div6>충전습관 점수</Div6>
          <Div7>89점</Div7>
        </Parent1>
        <B1>설정</B1>
        <FaSolidbarcodeIcon alt="" src="/barcode.png" />
        <SidebarrItem />
        <SidebarrInner />
        <LineDiv />
        <Wrapper onClick={openSuccessPopup}>
          <B2>인증서 제출</B2>
        </Wrapper>
        <Group>
          <Div8>번개맨</Div8>
          <VectorIcon alt="" src="/화살표.png" />
        </Group>
        <ClaritysettingsLineParent>
          <ClaritysettingsLineIcon alt="" src="/설정.png" />
          <Phbell onClick={onPhbellClick}>
            <VectorIcon1 alt="" src="/bell.png" />
          </Phbell>
          <SolarshopBroken onClick={openShopPopup}>
            <GroupIcon alt="" src="/ShopIc.png" />
          </SolarshopBroken>
        </ClaritysettingsLineParent>
        <FluentwalletCreditCard24RIcon alt="" src="/wallet.png" />
        <Cht>4,230 CHT</Cht>
        <RectangleParent>
          <FrameChild />
          <FrameIcon alt="" src="/아래바.png" />
          <FrameWrapper>
            <FrameDiv />
          </FrameWrapper>
          <FrameChild />
          <FrameIcon alt="" src="/아래바.png" />
          <Div9>80%</Div9>
        </RectangleParent>
        <RectangleGroup>
          <FrameChild />
          <FrameIcon alt="" src="/아래바.png" />
          <FrameWrapper>
            <FrameDiv />
          </FrameWrapper>
          <FrameChild />
          <FrameIcon alt="" src="/아래바.png" />
          <Div9>40% 이하일때</Div9>
        </RectangleGroup>
      </SidebarrRoot>
      {isSuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSuccessPopup}
        >
          <Success onClose={closeSuccessPopup} />
        </PortalPopup>
      )}
      {isShopPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeShopPopup}
        >
          <Shop onClose={closeShopPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Sidebarr;
