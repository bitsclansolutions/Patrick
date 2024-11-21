import React from "react";
import "./blockModal.css";
import { Modal } from "antd";
import ActionButton from "../../ActionButton";

function BlockModal({
  isModalOpen,
  handleModalOk,
  handleModalCancel,
  editAbleUser,
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
        <div className="block-modal">
          <p>
            Are you sure you want to{" "}
            <span>
              {editAbleUser?.blocked === true ? `“unblock”?` : `“block”?`}
            </span>
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
            label={editAbleUser?.blocked === true ? `Unblock?` : `Block?`}
            loading={isLoading}
            disabled={isLoading}
          />
        </div>
      </Modal>
    </>
  );
}

export default BlockModal;
