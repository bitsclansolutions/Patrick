import React, { useState, useEffect } from "react";
import "./reset.css";
import CustomButton from "../Components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "antd";
import { ResetPasswordService } from "../../Redux/Services/resetPasswordService";
import { toast } from "react-toastify";

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

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
        <p className="reset-form-heading">Reset Password</p>

        <Form className="reset-form-inner" onFinish={onFinish}>
          <Form.Item
            name="password"
            rules={[
              {
                pattern: new RegExp(
                  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
                ),
                message:
                  "Password must include at least 8 characters, one digit, one uppercase letter, and one special character.",
              },
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <input
              style={{ width: "100%" }}
              type="password"
              className="reset-custom-input"
              placeholder="Enter new password"
            />
          </Form.Item>

          <Form.Item
            name="passwordConfirmation"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <input
              style={{ width: "100%" }}
              type="password"
              className="reset-custom-input"
              placeholder="Rewrite password"
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
            <p>Resend Code?</p>
          </Link>

          <CustomButton
            loading={isLoading}
            disabled={isLoading}
            type={"solid"}
            label={"Sign-In"}
          />
        </Form>
      </div>
    </div>
  );
}

export default ResetPassword;
