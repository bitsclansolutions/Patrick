import React, { useState } from "react";
import CustomButton from "../../../Components/CustomButton";
import { useSelector } from "react-redux";
import { getTranslation } from "../../../../utils/getTranslation";
import { Form } from "antd";
import { endpoints } from "../../../../utils/endpoints";
import { toast } from "react-toastify";
import api from "../../../../utils/axiosInstance";

function FormWrapper() {
  const [isLoading, setIsLoading] = useState(false);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const [form] = Form.useForm();

  const handleContactUs = async (values) => {
    try {
      setIsLoading(true);
      await api.post(endpoints.contactUs(), values);
      toast.success("Email has been sent!");
      setIsLoading(false);
      form.resetFields();
    } catch (error) {
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };
  const onFinish = (values) => {
    const newValues = { ...values, status: "pending" };
    handleContactUs(newValues);
  };
  return (
    <div className="form-wrapper">
      <Form form={form} onFinish={onFinish}>
        <div className="input-group-wrapper">
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
              type="name"
              class="custom-input"
              placeholder={getTranslation("yourName", isDutch)}
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
              class="custom-input"
              placeholder={getTranslation("enterEmail", isDutch)}
            />
          </Form.Item>
        </div>
        <Form.Item
          name="phone_number"
          rules={[
            {
              required: true,
              message: "Please input your number!",
            },
          ]}
        >
          <input
            style={{ width: "100%" }}
            type="text"
            class="custom-input"
            placeholder={getTranslation("enterPhonenumber", isDutch)}
          />
        </Form.Item>

        <Form.Item
          name="heard_from_us"
          rules={[
            {
              required: true,
              message: "Please select an option!",
            },
          ]}
        >
          <select class="custom-select" style={{ width: "100%" }}>
            <option value="">
              {getTranslation("howDidYouHear", isDutch)}
            </option>
            <option value="Social Media">
              {getTranslation("socialMedia", isDutch)}
            </option>
            <option value="Friends or Family">
              {getTranslation("friendsOrFamily", isDutch)}
            </option>
            <option value="other">{getTranslation("other", isDutch)}</option>
          </select>
        </Form.Item>

        <Form.Item
          name="message"
          rules={[
            {
              required: true,
              message: "Please enter a message!",
            },
            {
              min: 50,
              message: "Message must be at least 50 characters long!",
            },
            {
              max: 200,
              message: "Message cannot exceed 200 characters!",
            },
          ]}
        >
          <textarea
            style={{ width: "100%" }}
            placeholder={getTranslation("leaveMessage", isDutch)}
            className="custom-textarea"
          />
        </Form.Item>

        <CustomButton
          loading={isLoading}
          disabled={isLoading}
          style={{ width: "fit-content" }}
          label={getTranslation("next", isDutch)}
          type="solid"
        />
      </Form>
      {/* <form>
        <div className="input-group-wrapper">
          <input
            style={{ width: "45%" }}
            type="text"
            class="custom-input"
            placeholder={getTranslation("yourName", isDutch)}
          />
          <input
            style={{ width: "45%" }}
            type="text"
            class="custom-input"
            placeholder={getTranslation("enterEmail", isDutch)}
          />
        </div>
        <input
          style={{ width: "100%" }}
          type="text"
          class="custom-input"
          placeholder={getTranslation("enterPhonenumber", isDutch)}
        />

        <select class="custom-select" style={{ width: "100%" }}>
          <option value="">{getTranslation("selectAnOption", isDutch)}</option>
          <option value="Social Media">
            {getTranslation("socialMedia", isDutch)}
          </option>
          <option value="Friends or Family">
            {getTranslation("friendsOrFamily", isDutch)}
          </option>
          <option value="other">{getTranslation("other", isDutch)}</option>
        </select>

        <textarea
          placeholder={getTranslation("leaveMessage", isDutch)}
          aut
          className="custom-textarea"
        />
        <CustomButton
          style={{ width: "fit-content" }}
          label={getTranslation("next", isDutch)}
          type="solid"
        />
      </form> */}
    </div>
  );
}

export default FormWrapper;
