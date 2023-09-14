import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component3 from "../../components/Component3";
import HomeIndicators from "../../components/HomeIndicators";
import { 
  Iframe,
  Home,
  MapRoot
} from "./styled";

export const Map1 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <MapRoot>
      <Home>
        <Component3 onButtonClick={onButtonClick} />
        <HomeIndicators />
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6738968364107!2d126.82869047612976!3d37.56274617203958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c14541010d1%3A0xa6c2cd0160df8438!2zTEfsgqzsnbTslrjsiqTtjIztgaw!5e0!3m2!1sko!2skr!4v1694623883132!5m2!1sko!2skr" />
      </Home>
    </MapRoot>
  );
};

