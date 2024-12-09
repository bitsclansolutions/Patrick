import React from "react";
import "./deleteModal.css";
import { Modal } from "antd";
import ActionButton from "../../ActionButton";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";

function DeleteModal({
  isModalOpen,
  handleModalOk,
  handleModalCancel,
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
        <div className="delete-modal">
          <p>
          {getTranslation("areYouSureYouWantto", isDutch)}<span>“{getTranslation("deleteThisUser", isDutch)}”?</span>
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
            label={getTranslation("delete", isDutch)}
            loading={isLoading}
            disabled={isLoading}
          />
        </div>
      </Modal>
    </>
  );
}

export default DeleteModal;
