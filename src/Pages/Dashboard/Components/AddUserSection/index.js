import React, { useState } from "react";
import "./addUserSection.css";
import { Form } from "antd";
import CustomButton from "../../../Components/CustomButton";
import api from "../../../../utils/axiosInstance";
import { endpoints } from "../../../../utils/endpoints";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchAllusers } from "../../../../Redux/Action";
import { formatErrors } from "../../../../utils/ErrorHandler";

function AddUserSection() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const handleCreateUser = async (values) => {
    try {
      setIsLoading(true);
      const randomPassword = Math.floor(Math.random() * 3) + 1;
      const data = {
        name: values.name,
        email: values.email,
        password: "password@" + randomPassword,
      };
      const response = await api.post(endpoints.createUser(), data);
      console.log("response", response);

      // if(response)
      await dispatch(fetchAllusers());
      form.resetFields();
      setIsLoading(false);
      toast.success("User Created Successfully");
    } catch (error) {
      const formatedErrors = formatErrors(error?.response?.data?.errors);
      console.log("error =>", formatedErrors);
      setIsLoading(false);

      toast.error(
        <div
          dangerouslySetInnerHTML={{
            __html: `Unable to process your request.<br>${formatedErrors}`,
          }}
        />
      );
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    handleCreateUser(values);
  };
  return (
    <div className="add-user-section-main">
      <p className="add-user-section-heading">Add User</p>

      <Form form={form} onFinish={onFinish} className="add-user-form">
        <div className="add-user-inputs-wrapper">
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
              class="add-user-input"
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
          >
            <input
              style={{ width: "100%" }}
              type="email"
              class="add-user-input"
              placeholder="Enter your email"
            />
          </Form.Item>
        </div>
        <CustomButton
          label={"Submit"}
          type={"solid"}
          loading={isLoading}
          disabled={isLoading}
          style={{ alignSelf: "flex-end" }}
        />
      </Form>
    </div>
  );
}

export default AddUserSection;
