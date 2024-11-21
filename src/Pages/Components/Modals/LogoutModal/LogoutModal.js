import React from "react";
import { Modal } from "antd";
import "../modalWrapper.css";
import "./logoutModal.css";
const LogoutModal = ({
  isLogoutModalOpen,
  handleLogoutModalOk,
  handleLogoutModalCancel,
}) => {
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
            Are you sure you want to <span>“Logout”?</span>
          </p>
        </div>
      </Modal>
    </>
  );
};
export default LogoutModal;
