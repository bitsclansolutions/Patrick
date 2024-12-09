import React from "react";
import { Modal } from "antd";
import "../modalWrapper.css";
import "./logoutModal.css";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";
const LogoutModal = ({
  isLogoutModalOpen,
  handleLogoutModalOk,
  handleLogoutModalCancel,
}) => {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  return (
    <>
      <Modal
        className="custom-modal-wrapper"
        open={isLogoutModalOpen}
        onOk={handleLogoutModalOk}
        onCancel={handleLogoutModalCancel}
        maskClosable={false}
      >
        <div className="logout-modal">
          <p>
            {getTranslation("areYouSureYouWantto", isDutch)} <span>“{getTranslation("logout", isDutch)}”?</span>
          </p>
        </div>
      </Modal>
    </>
  );
};
export default LogoutModal;
