import { useCallback } from "react";
import IllustrationFinances from "../../components/IllustrationFinances";
import { useNavigate } from "react-router-dom";
import { 
  Div,
  P,
  Div1,
  Parent1,
  GreetinInner,
  Div2,
  Wrapper,
  GreetinChild,
  Greetin,
  GreetingRoot
} from "./styled";

export const Greeting = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <GreetingRoot>
      <Greetin>
        <GreetinInner>
          <Parent1>
            <Div>충전 습관 기록</Div>
            <Div1>
              <P>{`전기차 충전 정보를 연결하여 `}</P>
              <P>다양한 혜택을 경험해보세요!</P>
            </Div1>
          </Parent1>
        </GreetinInner>
        <IllustrationFinances
          imageDimensions="/undefined23.png"
          illustrationFinancesIconWidth="100%"
          illustrationFinancesIconHeight="46.21%"
          illustrationFinancesIconPosition="absolute"
          illustrationFinancesIconTop="24.62%"
          illustrationFinancesIconRight="0%"
          illustrationFinancesIconBottom="29.18%"
          illustrationFinancesIconLeft="0%"
          illustrationFinancesIconMaxWidth="100%"
          illustrationFinancesIconOverflow="hidden"
          illustrationFinancesIconMaxHeight="100%"
        />
        <GreetinChild onClick={onFrameButtonClick}>
          <Wrapper>
            <Div2>시작하기</Div2>
          </Wrapper>
        </GreetinChild>
      </Greetin>
    </GreetingRoot>
  );
};


