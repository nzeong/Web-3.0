import { useState, useCallback } from "react";
import Account from "../../components/Account";
import PortalPopup from "../../components/PortalPopup";
import ScoreCard from "../../components/ScoreCard";
import Sidebarr from "../../components/Sidebarr";
import PortalDrawer from "../../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import { 
  B,
  Tip,
  InstanceChild,
  FooterInner,
  FrameChild,
  LineParent,
  FrameWrapper,
  FooterChild,
  RectangleIcon,
  FrameButton,
  Icon,
  Footer,
  Icon1,
  Div,
  Wrapper,
  Div1,
  Home,
  Div2,
  Icon2,
  Parent1,
  LineDiv,
  Div3,
  LgE13,
  Div4,
  Div5,
  LineGroup,
  Div12,
  Container,
  Div13,
  Frame1,
  FrameParent,
  MainRoot
} from "./styled";

export const Main = () => {
  const [isAccountPopupOpen, setAccountPopupOpen] = useState(false);
  const [isComponent1Open, setComponent1Open] = useState(false);
  const navigate = useNavigate();

  const openComponent1 = useCallback(() => {
    setComponent1Open(true);
  }, []);

  const closeComponent1 = useCallback(() => {
    setComponent1Open(false);
  }, []);

  const openAccountPopup = useCallback(() => {
    setAccountPopupOpen(true);
  }, []);

  const closeAccountPopup = useCallback(() => {
    setAccountPopupOpen(false);
  }, []);

  const onFrameButton2Click = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  return (
    <>
      <MainRoot>
        <Home>
          <ScoreCard />
          <B>충전 이력</B>
          <Tip>Tip !</Tip>
          <Footer>
            <FooterInner>
              <InstanceChild />
            </FooterInner>
            <FooterChild onClick={openComponent1}>
              <FrameWrapper>
                <LineParent>
                  <FrameChild />
                  <FrameChild />
                  <FrameChild />
                </LineParent>
              </FrameWrapper>
            </FooterChild>
            <FrameButton onClick={openAccountPopup}>
              <RectangleIcon alt="" src="/undefined9.png" />
            </FrameButton>
            <Icon alt="" src="/6164941@2x.png" />
          </Footer>
          <Icon1 alt="" src="/undefined25.png" />
          <Wrapper onClick={onFrameButton2Click}>
            <Div>충전소 찾기</Div>
          </Wrapper>
          <Div1>배터리 잔량이 50%일때 충전하는 것이 좋아요.</Div1>
        </Home>
        <Parent1>
          <Div2>충전 습관 포인트</Div2>
          <Icon2 alt="" src="/undefined26.png" />
        </Parent1>
        <FrameParent>
          <LineGroup>
            <LineDiv />
            <Div3>2023.09.08</Div3>
            <LgE13>LG 사이언스파크 E13동 지하 3층</LgE13>
            <Div4>잔여량 : 14 %</Div4>
            <Div5>충전후 잔여량 : 98 %</Div5>
          </LineGroup>
          <LineGroup>
            <LineDiv />
            <Div3>2023.09.08</Div3>
            <LgE13>LG 사이언스파크 E13동 지하 3층</LgE13>
            <Div4>잔여량 : 14 %</Div4>
            <Div5>충전후 잔여량 : 98 %</Div5>
          </LineGroup>
          <LineGroup>
            <LineDiv />
            <Div3>2023.09.08</Div3>
            <LgE13>LG 사이언스파크 E13동 지하 3층</LgE13>
            <Div4>잔여량 : 5 %</Div4>
            <Div5>충전후 잔여량 : 80 %</Div5>
            <Container>
              <Div12>검사내역</Div12>
            </Container>
            <Frame1>
              <Div13>인증서</Div13>
            </Frame1>
          </LineGroup>
        </FrameParent>
      </MainRoot>
      {isComponent1Open && (
        <PortalDrawer placement="Left" onOutsideClick={closeComponent1}>
          <Sidebarr onClose={closeComponent1} />
        </PortalDrawer>
      )}
      {isAccountPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccountPopup}
        >
          <Account onClose={closeAccountPopup} />
        </PortalPopup>
      )}
    </>
  );
};


