import React from "react";
import "./deleteModal.css";
import { Modal } from "antd";
import ActionButton from "../../ActionButton";

function DeleteModal({
  isModalOpen,
  handleModalOk,
  handleModalCancel,
  isLoading,
}) {
  return (
    <>
      <Modal
        className="custom-modal-wrapper"
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        maskClosable={false}
        footer={null}
      >
        <div className="delete-modal">
          <p>
            Are you sure you want to <span>“Delete”?</span>
          </p>
        </div>

        {/* Custom footer buttons */}
        <div className="custom-modal-footer">
          <ActionButton
            onClick={() => {
              handleModalCancel();
            }}
            style={{ marginRight: "10px" }}
            label={"Cancel"}
            type={"outline"}
            htmlType={"button"}
            loading={isLoading}
            disabled={isLoading}
          />
          <ActionButton
            onClick={handleModalOk}
            label={"Delete"}
            loading={isLoading}
            disabled={isLoading}
          />
        </div>
      </Modal>
    </>
  );
}

export default DeleteModal;
