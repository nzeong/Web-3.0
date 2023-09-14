import React from "react";
import { useState, useCallback } from "react";
import Private from "../Private";
import PortalPopup from "../PortalPopup";
import { AccountChild,
  Image1Icon,
  GroupChild,
  ShowPrivateKey,
  RectangleParent,
  VectorIcon,
  PhxBold,
  Image1Parentm,
  AccountRoot} from "./styled";


export const Account = ({ onClose }) => {
  const [isPrivatePopupOpen, setPrivatePopupOpen] = useState(false);

  const openPrivatePopup = useCallback(() => {
    setPrivatePopupOpen(true);
  }, []);

  const closePrivatePopup = useCallback(() => {
    setPrivatePopupOpen(false);
  }, []);

  return (
    <>
      <AccountRoot>
        <AccountChild />
        <Image1Parent>
          <Image1Icon alt="" src="/account.png" />
          <RectangleParent onClick={openPrivatePopup}>
            <GroupChild />
            <ShowPrivateKey>Show Private Key</ShowPrivateKey>
          </RectangleParent>
          <PhxBold onClick={onClose}>
            <VectorIcon alt="" src="/Vector (1).png" />
          </PhxBold>
        </Image1Parent>
      </AccountRoot>
      {isPrivatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePrivatePopup}
        >
          <Private onClose={closePrivatePopup} />
        </PortalPopup>
      )}
    </>
  );
};


