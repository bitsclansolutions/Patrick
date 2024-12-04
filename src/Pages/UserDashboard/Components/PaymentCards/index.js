import React, { useState } from "react";
import { ReactComponent as PaymentBasicIcon } from "../../../Components/icons/payment-basic-icon.svg";
import PackageCard from "../PaymentCard";
import "./paymentCards.css";
import api from "../../../../utils/axiosInstance";
import { endpoints } from "../../../../utils/endpoints";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const PaymentCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = useSelector((state) => state.AuthReducer.user);

  console.log("User Info from payment cards =>", userInfo);

  const handlePayment = async (id) => {
    try {
      setIsLoading(true);
      const data = { sub_id: id };
      const response = await api.post(endpoints.createCheckOutSession(), data);
      const checkoutUrl = response?.data?.data?.url;
      if (checkoutUrl) {
        toast.success("Navigate to payment page");
        window.open(checkoutUrl, "_blank"); // Open the URL in a new tab
      } else {
        toast.error("Something went wrong");
        console.log("URL not found in the response.");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log("handlePayment", error);
    } finally {
      setIsLoading(false);
    }
  };

  const subscription = userInfo?.user_subscription;
  const subscriptionFrequency = subscription?.subscription_frequency;
  const monthlyPriceId = process.env.REACT_APP_MONTHLY_PRICE_ID;
  const yearlyPriceId = process.env.REACT_APP_ANNUALLY_PRICE_ID;

  return (
    <div className="payment-packages-section-main">
      {subscription ? (
        subscriptionFrequency === "yearly" ? (
          <div className="subscribed-message">
            <p>You have subscribed to the <strong>yearly package</strong>.</p>
          </div>
        ) : (
          <div
            className="packages-wrapper"
            style={{
              pointerEvents: isLoading ? "none" : "all",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {isLoading && (
              <div className="payment-cards-overlay-loading">
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 48,
                        color: "#ffffff",
                      }}
                      spin
                    />
                  }
                />
                <p>Wait... Process is in progress</p>
              </div>
            )}

            <div className="subscribed-message">
              <p>
                You have subscribed to the <strong>monthly package</strong>. Hit "Get Started" to
                upgrade to the yearly package.
              </p>
            </div>

            <PackageCard
              name="Pro"
              price="$200"
              priceDes=" / annually"
              description="Choose a plan that fits your needs with no hidden fees or surprises."
              features={[
                "All analytics features",
                "Up to 250,000 tracked visits",
                "Normal support",
                "Up to 3 team members",
              ]}
              icon={PaymentBasicIcon}
              isPopular
              onClick={() => handlePayment(yearlyPriceId)}
              isDisabled={isLoading}
              isLoading={isLoading}
            />
          </div>
        )
      ) : (
        <div
          className="packages-wrapper"
          style={{ pointerEvents: isLoading ? "none" : "all" }}
        >
          {isLoading && (
            <div className="overlay">
              <Spin
                indicator={
                  <LoadingOutlined
                    style={{
                      fontSize: 48,
                      color: "#ffffff",
                    }}
                    spin
                  />
                }
              />
              <p>Wait... Process is in progress</p>
            </div>
          )}

          <PackageCard
            name="Basic"
            price="$20"
            priceDes=" / monthly"
            description="Choose a plan that fits your needs with no hidden fees or surprises."
            features={[
              "All analytics features",
              "Up to 250,000 tracked visits",
              "Normal support",
              "Up to 3 team members",
            ]}
            icon={PaymentBasicIcon}
            onClick={() => handlePayment(monthlyPriceId)}
            isDisabled={isLoading}
            isLoading={isLoading}
          />

          <PackageCard
            name="Pro"
            price="$200"
            priceDes=" / annually"
            description="Choose a plan that fits your needs with no hidden fees or surprises."
            features={[
              "All analytics features",
              "Up to 250,000 tracked visits",
              "Normal support",
              "Up to 3 team members",
            ]}
            icon={PaymentBasicIcon}
            isPopular
            onClick={() => handlePayment(yearlyPriceId)}
            isDisabled={isLoading}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentCards;
