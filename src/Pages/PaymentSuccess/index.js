import React, { useEffect, useState } from "react";
import "./paymentSuccess.css";
import { useNavigate } from "react-router-dom";
import api from "../../utils/axiosInstance";
import { endpoints } from "../../utils/endpoints";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { loginSuccess } from "../../Redux/Action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function PaymentSuccess() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetUserInfo = async (sessionData) => {
    try {
      const paymentResponse = await api.post(
        endpoints?.checkSubscriptionStatus(),
        sessionData
      );
      if (paymentResponse.status === 200) {
        const response = await api.get(endpoints.getUserProfile());
        localStorage.setItem("user", JSON.stringify(response.data.data));
        dispatch(loginSuccess(response.data.data));
        console.log("Profile =>", response);
        setIsLoading(false);
      } else {
        toast.error("Something went wrong! TRY AGAIN");
        navigate("/user-dashboard");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("session_id");
    const sessionData = {
      session_id: id,
    };
    handleGetUserInfo(sessionData);
  }, []);
  return (
    <div className="payment-success-container">
      {isLoading ? (
        <div className="payment-success-loading">
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 48,
                  color: "blue",
                }}
                spin
              />
            }
          />
          <p className="payment-success-message">
            Please wait do not close this page yet ......
          </p>
        </div>
      ) : (
        <div className="payment-success-card">
          <div className="payment-success-icon">✅</div>
          <h1 className="payment-success-title">Payment Successful!</h1>
          <p className="payment-success-message">
            Thank you for your purchase. Your transaction was completed
            successfully.
          </p>
          <button
            className="payment-success-button"
            onClick={() => navigate("/user-dashboard")}
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentSuccess;
