import React, { useState } from "react";
import "./forgetPassword.css";
import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import { ResetPasswordEmailService } from "../../Redux/Services/resetPasswordEmailService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getTranslation } from "../../utils/getTranslation";

function ForgetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const handleResetPasswordEmail = async (values) => {
    try {
      setIsLoading(true);
      const response = await ResetPasswordEmailService(values);
      if (response.status === 200) {
        toast.success("Check your email to reset password");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error =>", error);

      setIsLoading(false);
      toast.error(
        <div
          dangerouslySetInnerHTML={{
            __html: `Unable to process your request.<br>${error?.response?.data?.message}`,
          }}
        />
      );
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    handleResetPasswordEmail(values);
    // alert;
  };
  return (
    <div className="forget-password-main-wrapper">
      <div className="forget-password-form-wrapper">
        <p className="forget-password-form-heading">{getTranslation("forgetPasswordHeading", isDutch)}</p>

        <Form className="forget-password-form-inner" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: getTranslation("pleaseInputYourEmail", isDutch),
              },
            ]}
          >
            <input
              style={{ width: "100%" }}
              type="email"
              className="forget-password-custom-input"
              placeholder={getTranslation("enterYourEmail", isDutch)}
            />
          </Form.Item>
          <p
            style={{
              textDecoration: "none",
              textAlign: "left",
              color: "#387FF5",
              fontSize: "0.8rem",
            }}
          >
            {getTranslation("provideYourEmail", isDutch)}
          </p>

          <CustomButton
            loading={isLoading}
            disabled={isLoading}
            type={"solid"}
            label={getTranslation("next", isDutch)}
          />
        </Form>
      </div>
    </div>
  );
}

export default ForgetPassword;
