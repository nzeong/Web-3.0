import styled from "styled-components";

const WallpaperIcon = styled.img`position: absolute;
  height: calc(100% - 55px);
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 55px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  right: ${(p) => p.wallpaperIconRight}
  left: ${(p) => p.wallpaperIconLeft}
`;
const Ios16Wallpaper11 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 832px;
`;
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
const Ios16Wallpaper2 = styled.div`
  position: absolute;
  top: 0px;
  left: -9px;
  width: 393px;
  height: 774px;
`;
const Iphone13Mini = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-white);
  width: 375px;
  height: 777px;
  overflow: hidden;
`;
const Ios16WallpaperRoot = styled.div`width: 428px;
  height: 798px;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-white);
  font-family: var(--font-noto-sans-kr);
  position: ${(p) => p.iOS16WallpaperPosition}
  top: ${(p) => p.iOS16WallpaperTop}
  left: ${(p) => p.iOS16WallpaperLeft}
`;
const IOS16Wallpaper1 = ({
  iOS16WallpaperPosition,
  iOS16WallpaperTop,
  iOS16WallpaperLeft,
  wallpaperIconRight,
  wallpaperIconLeft,
  onFrameButtonClick,
  onButtonClick,
}) => {
  return (
    <Ios16WallpaperRoot
      iOS16WallpaperPosition={iOS16WallpaperPosition}
      iOS16WallpaperTop={iOS16WallpaperTop}
      iOS16WallpaperLeft={iOS16WallpaperLeft}
    >
      <Iphone13Mini>
        <Ios16Wallpaper11>
          <WallpaperIcon
            alt=""
            src="/undefined4.png"
            wallpaperIconRight={wallpaperIconRight}
            wallpaperIconLeft={wallpaperIconLeft}
          />
        </Ios16Wallpaper11>
        <Ios16Wallpaper2>
          <AppsIcon alt="" src="/undefined3.png" />
          <Wrapper onClick={onFrameButtonClick}>
            <Button
              autoFocus={false}
              disabled={false}
              onClick={onButtonClick}
            />
          </Wrapper>
          <YourApp>번개맨</YourApp>
        </Ios16Wallpaper2>
      </Iphone13Mini>
    </Ios16WallpaperRoot>
  );
};

export default IOS16Wallpaper1;
