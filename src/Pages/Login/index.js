import React from "react";
import "./login.css";
import CustomButton from "../Components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginRequest, loginSuccess } from "../../Redux/Action";
import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";
import { toast } from "react-toastify";
import { getTranslation } from "../../utils/getTranslation";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);
  const { user, loading } = useSelector((state) => state.AuthReducer);

  const fetchData = async (values) => {
    dispatch(loginRequest());
    try {
      const response = await api.post(endpoints.login(), values);
      localStorage.setItem("token", response.data.data.token);
      if (response.status === 200) {
        const res = await api.get(endpoints.getUserProfile());
        localStorage.setItem("user", JSON.stringify(res.data.data));
        dispatch(loginSuccess(res.data.data));
        toast.success("Logged In Successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Credentials are wrong!", error.message);
      }
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    fetchData(values);

    // alert;
  };

  console.log(user);
  console.log(loading);

  return (
    <div className="login-main-wrapper">
      <div className="login-form-wrapper">
        <p className="login-form-heading">
          {getTranslation("signIn", isDutch)}
        </p>

        <Form className="login-form-inner" onFinish={onFinish}>
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
              class="login-custom-input"
              placeholder={getTranslation("enterYourEmail", isDutch)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              // {
              //   pattern: new RegExp(
              //     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
              //   ),
              //   message:
              //     "must include min 8 character, one digit, one upper case and one special charater",
              // },
              {
                required: true,
                message: getTranslation("pleaseInputYourPassword", isDutch),
              },
            ]}
          >
            <input
              style={{ width: "100%" }}
              type="password"
              class="login-custom-input"
              placeholder={getTranslation("enterYourPassword", isDutch)}
            />
          </Form.Item>
          <Link
            to={"/forget-password"}
            style={{
              textDecoration: "none",
              textAlign: "right",
              marginBottom: "0rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                marginBottom: "0rem",
              }}
            >
              {getTranslation("forgetPassword", isDutch)}
            </p>
          </Link>
          <CustomButton
            type={"solid"}
            label={getTranslation("signIn", isDutch)}
            loading={loading}
            disabled={loading}
            // style={{ marginTop: "0rem" }}
          />
        </Form>
      </div>
    </div>
  );
}

export default Login;
