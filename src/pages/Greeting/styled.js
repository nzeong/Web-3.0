import styled from "styled-components";

export const Div = styled.div`
  position: relative;
`;
export const P = styled.p`
  margin: 0;
`;
export const Div1 = styled.div`
  position: relative;
  font-size: var(--paragraph-2-size);
  font-family: var(--font-aclonica);
  color: rgba(51, 61, 75, 0.6);
  display: inline-block;
  width: 316px;
`;
export const Parent1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
export const GreetinInner = styled.div`
  position: absolute;
  top: 108px;
  left: 39px;
  width: 321px;
  height: 111px;
`;
export const Div2 = styled.div`
  position: absolute;
  top: 16.8px;
  left: 131.5px;
  font-size: 16.8px;
  font-family: var(--font-acme);
  color: var(--color-white);
  text-align: left;
`;
export const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 12px;
  background-color: var(--color-goldenrod);
  width: 321px;
  height: 54px;
  overflow: hidden;
`;
export const GreetinChild = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 608px;
  left: 16px;
  width: 321px;
  height: 54px;
`;
export const Greetin = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-white);
  width: 360px;
  height: 780px;
  overflow: hidden;
`;
export const GreetingRoot = styled.div`
  position: relative;
  width: 100%;
  height: 780px;
  text-align: left;
  font-size: 24px;
  color: #333d4b;
  font-family: var(--font-abhaya-libre-extrabold);
`;