import styled from "styled-components";

const AppsIcon = styled.img`
  position: absolute;
  top: 80px;
  left: 25px;
  width: 342px;
  height: 624px;
  object-fit: cover;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 71px;
  height: 64px;
  background-image: url("/public/11@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 524px;
  left: 35px;
  width: 71px;
  height: 64px;
  &:hover {
    background-color: var(--color-whitesmoke);
  }
`;
const YourApp = styled.div`
  position: absolute;
  top: 588px;
  left: 53px;
  letter-spacing: 0.15px;
`;
const Ios16WallpaperRoot = styled.div`width: 393px;
  height: 774px;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-white);
  font-family: var(--font-noto-sans-kr);
  position: ${(p) => p.iOS16WallpaperPosition}
  top: ${(p) => p.iOS16WallpaperTop}
  left: ${(p) => p.iOS16WallpaperLeft}
`;
const IOS16Wallpaper = ({
  iOS16WallpaperPosition,
  iOS16WallpaperTop,
  iOS16WallpaperLeft,
  onFrameButtonClick,
  onButtonClick,
}) => {
  return (
    <Ios16WallpaperRoot
      iOSnpm16WallpaperPosition={iOS16WallpaperPosition}
      iOS16WallpaperTop={iOS16WallpaperTop}
      iOS16WallpaperLeft={iOS16WallpaperLeft}
    >
      <AppsIcon alt="" src="/undefined3.png" />
      <Wrapper onClick={onFrameButtonClick}>
        <Button autoFocus={false} disabled={false} onClick={onButtonClick} />
      </Wrapper>
      <YourApp>번개맨</YourApp>
    </Ios16WallpaperRoot>
  );
};

export default IOS16Wallpaper;
