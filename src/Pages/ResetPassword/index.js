import React, { useState, useEffect } from "react";
import "./reset.css";
import CustomButton from "../Components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "antd";
import { ResetPasswordService } from "../../Redux/Services/resetPasswordService";
import { toast } from "react-toastify";
import { getTranslation } from "../../utils/getTranslation";
import { useSelector } from "react-redux";

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const navigate = useNavigate();

  useEffect(() => {
    // Get the current URL's query parameters
    const params = new URLSearchParams(window.location.search);
    // Extract the "token" parameter
    const tokenFromUrl = params.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, []);

  console.log("token", token);

  const handleResetPassword = async (values) => {
    try {
      setIsLoading(true);
      const response = await ResetPasswordService(token, values);
      if (response.status === 200) {
        toast.success("Password Reset Successfully");
        setIsLoading(false);
        navigate("/login");
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
    console.log("Form Submitted: ", values);
    const data = {
      password: values?.password,
      password_confirmation: values?.passwordConfirmation,
    };
    handleResetPassword(data);
  };

  return (
    <div className="reset-main-wrapper">
      <div className="reset-form-wrapper">
        <p className="reset-form-heading">
          {getTranslation("resetPassword", isDutch)}
        </p>

        <Form className="reset-form-inner" onFinish={onFinish}>
          <Form.Item
            name="password"
            rules={[
              {
                pattern: new RegExp(
                  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
                ),
                message: getTranslation("passwordValidations", isDutch),
              },
              {
                required: true,
                message: getTranslation("pleaseInputYourPassword", isDutch),
              },
            ]}
          >
            <input
              style={{ width: "100%" }}
              type="password"
              className="reset-custom-input"
              placeholder={getTranslation("enterNewPassword", isDutch)}
            />
          </Form.Item>

          <Form.Item
            name="passwordConfirmation"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: getTranslation("pleaseConfirmYourPassword", isDutch),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(getTranslation("passwordsDonotMatch", isDutch))
                  );
                },
              }),
            ]}
          >
            <input
              style={{ width: "100%" }}
              type="password"
              className="reset-custom-input"
              placeholder={getTranslation("rewritePassword", isDutch)}
            />
          </Form.Item>

          <Link
            to={"/forget-password"}
            style={{
              textDecoration: "none",
              textAlign: "right",
              marginBottom: "0rem",
            }}
          >
            <p>{getTranslation("resendCode", isDutch)}</p>
          </Link>

          <CustomButton
            loading={isLoading}
            disabled={isLoading}
            type={"solid"}
            label={getTranslation("submit", isDutch)}
          />
        </Form>
      </div>
    </div>
  );
}

export default ResetPassword;
