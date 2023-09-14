import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import IOS16Wallpaper1 from "../components/IOS16Wallpaper1";
import styled from "styled-components";

const StartRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 780px;
  overflow: hidden;
`;
const Start1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/greeting");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/greeting");
  }, [navigate]);

  return (
    <StartRoot>
      <IOS16Wallpaper1
        iOS16WallpaperPosition="absolute"
        iOS16WallpaperTop="0px"
        iOS16WallpaperLeft="-10px"
        wallpaperIconRight="-10px"
        wallpaperIconLeft="10px"
        onFrameButtonClick={onFrameButtonClick}
        onButtonClick={onButtonClick}
      />
    </StartRoot>
  );
};

export default Start1;
