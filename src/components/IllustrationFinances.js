import styled from "styled-components";

const IllustrationfinancesIconRoot = styled.img`width: 750px;
  height: 750px;
  object-fit: cover;
  width: ${(p) => p.illustrationFinancesIconWidth}
  height: ${(p) => p.illustrationFinancesIconHeight}
  position: ${(p) => p.illustrationFinancesIconPosition}
  top: ${(p) => p.illustrationFinancesIconTop}
  right: ${(p) => p.illustrationFinancesIconRight}
  bottom: ${(p) => p.illustrationFinancesIconBottom}
  left: ${(p) => p.illustrationFinancesIconLeft}
  max-width: ${(p) => p.illustrationFinancesIconMaxWidth}
  overflow: ${(p) => p.illustrationFinancesIconOverflow}
  max-height: ${(p) => p.illustrationFinancesIconMaxHeight}
`;
const IllustrationFinances = ({
  imageDimensions,
  illustrationFinancesIconWidth,
  illustrationFinancesIconHeight,
  illustrationFinancesIconPosition,
  illustrationFinancesIconTop,
  illustrationFinancesIconRight,
  illustrationFinancesIconBottom,
  illustrationFinancesIconLeft,
  illustrationFinancesIconMaxWidth,
  illustrationFinancesIconOverflow,
  illustrationFinancesIconMaxHeight,
}) => {
  return (
    <IllustrationfinancesIconRoot
      alt=""
      src={imageDimensions}
      illustrationFinancesIconWidth={illustrationFinancesIconWidth}
      illustrationFinancesIconHeight={illustrationFinancesIconHeight}
      illustrationFinancesIconPosition={illustrationFinancesIconPosition}
      illustrationFinancesIconTop={illustrationFinancesIconTop}
      illustrationFinancesIconRight={illustrationFinancesIconRight}
      illustrationFinancesIconBottom={illustrationFinancesIconBottom}
      illustrationFinancesIconLeft={illustrationFinancesIconLeft}
      illustrationFinancesIconMaxWidth={illustrationFinancesIconMaxWidth}
      illustrationFinancesIconOverflow={illustrationFinancesIconOverflow}
      illustrationFinancesIconMaxHeight={illustrationFinancesIconMaxHeight}
    />
  );
};

export default IllustrationFinances;
