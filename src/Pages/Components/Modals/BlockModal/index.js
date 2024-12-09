import React from "react";
import "./blockModal.css";
import { Modal } from "antd";
import ActionButton from "../../ActionButton";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";

function BlockModal({
  isModalOpen,
  handleModalOk,
  handleModalCancel,
  editAbleUser,
  isLoading,
}) {
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

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
          {getTranslation("areYouSureYouWantto", isDutch)}{" "}
            <span>
              {editAbleUser?.blocked === 1 ? `“${getTranslation("unblock", isDutch)}”?` : `“${getTranslation("block", isDutch)}”?`}
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
            label={editAbleUser?.blocked === 1 ? `${getTranslation("unblock", isDutch)}?` : `${getTranslation("block", isDutch)}?`}
            loading={isLoading}
            disabled={isLoading}
          />
        </div>
      </Modal>
    </>
  );
}

export default BlockModal;
