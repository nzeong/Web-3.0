import Component2 from "./pointShop/Component2";
import styled from "styled-components";

const ShopRoot = styled.div`
  width: 312px;
  height: 289px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
`;
const Shop = ({ onClose }) => {
  return (
    <ShopRoot>
      <Component2 />
    </ShopRoot>
  );
};

export default Shop;
