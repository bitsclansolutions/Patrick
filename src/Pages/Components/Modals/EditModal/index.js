import React, { useEffect } from "react";
import "./editModal.css";
import { Modal, Form, Button } from "antd";
import ActionButton from "../../ActionButton";

function EditModal({
  isModalOpen,
  handleModalOk,
  handleModalCancel,
  editAbleUser,
  isLoading,
}) {
  const [form] = Form.useForm();

  // Watch for changes in editAbleUser and update form fields
  useEffect(() => {
    if (editAbleUser) {
      form.setFieldsValue({
        name: editAbleUser.name || "",
        email: editAbleUser.email || "",
      });
    } else {
      form.resetFields(); // Reset fields when editAbleUser is null
    }
  }, [editAbleUser, form]);

  console.log("editable values from form =>", editAbleUser);

  return (
    <>
      <Modal
        className="custom-modal-wrapper"
        key={editAbleUser?.id || "new"}
        open={isModalOpen}
        onCancel={handleModalCancel}
        maskClosable={false}
        footer={null} // Remove default footer buttons
      >
        <div className="edit-modal">
          <Form
            form={form}
            onFinish={async (values) => {
              console.log("Form Submitted:", values);
              const updateUser = {
                id: editAbleUser?.id,
                name: values?.name,
                email: values?.email,
              };
              await handleModalOk(updateUser);
              form.resetFields();
            }}
            style={{ width: "100%" }}
          >
            <div className="edit-modal-inputs-wrapper">
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
                style={{ width: "45%" }}
              >
                <input
                  style={{ width: "100%" }}
                  type="text"
                  className="edit-modal-input"
                  placeholder="Enter your name"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
                style={{ width: "45%" }}
                disabled
              >
                <input
                  style={{ width: "100%" }}
                  type="email"
                  className="edit-modal-input"
                  placeholder="Enter your email"
                  disabled={true}
                />
              </Form.Item>
            </div>

            {/* Custom footer buttons */}
            <div className="custom-modal-footer">
              <ActionButton
                onClick={() => {
                  handleModalCancel();
                  form.resetFields();
                }}
                style={{ marginRight: "10px" }}
                label={"cancel"}
                type={"outline"}
                htmlType={"button"}
                loading={isLoading}
                disabled={isLoading}
              />
              <ActionButton
                htmlType={"submit"}
                label={"save"}
                loading={isLoading}
                disabled={isLoading}
              />
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default EditModal;
