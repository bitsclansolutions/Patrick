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
import { getTranslation } from "../../../../utils/getTranslation";

const PaymentCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = useSelector((state) => state.AuthReducer.user);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

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
            <p>{getTranslation("subscribedYearly", isDutch)}</p>
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
              <div className="overlay-package">
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
                <p>{getTranslation("waitInProgress", isDutch)}</p>
              </div>
            )}

            <div className="subscribed-message">
              <p>{getTranslation("subscribedMonthly", isDutch)}</p>
            </div>

            <PackageCard
              name={getTranslation("pro", isDutch)}
              price="$200"
              priceDes={` / ${getTranslation("annually", isDutch)}`}
              description={getTranslation("chooseAPlan", isDutch)}
              features={[
                getTranslation("whatsIncludedListOne", isDutch),
                getTranslation("whatsIncludedListTwo", isDutch),
                getTranslation("whatsIncludedListThree", isDutch),
                getTranslation("whatsIncludedListFour", isDutch),
              ]}
              icon={PaymentBasicIcon}
              isPopular
              onClick={() => handlePayment(yearlyPriceId)}
              isDisabled={isLoading}
              isLoading={isLoading}
              popularText={getTranslation("popular", isDutch)}
              buttonLabel={getTranslation("getStarted", isDutch)}
            />
          </div>
        )
      ) : (
        <div
          className="packages-wrapper"
          style={{ pointerEvents: isLoading ? "none" : "all" }}
        >
          {isLoading && (
            <div className="overlay-package">
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
              <p>{getTranslation("waitInProgress", isDutch)}</p>
            </div>
          )}

          <PackageCard
            name={getTranslation("basic", isDutch)}
            price="$20"
            priceDes={` / ${getTranslation("monthly", isDutch)}`}
            description={getTranslation("chooseAPlan", isDutch)}
            features={[
              getTranslation("whatsIncludedListOne", isDutch),
              getTranslation("whatsIncludedListTwo", isDutch),
              getTranslation("whatsIncludedListThree", isDutch),
              getTranslation("whatsIncludedListFour", isDutch),
            ]}
            icon={PaymentBasicIcon}
            onClick={() => handlePayment(monthlyPriceId)}
            isDisabled={isLoading}
            isLoading={isLoading}
            buttonLabel={getTranslation("getStarted", isDutch)}
          />

          <PackageCard
            name={getTranslation("pro", isDutch)}
            price="$200"
            priceDes={` / ${getTranslation("annually", isDutch)}`}
            description={getTranslation("chooseAPlan", isDutch)}
            featureHeading={getTranslation("chooseAPlan", isDutch)}
            features={[
              getTranslation("whatsIncludedListOne", isDutch),
              getTranslation("whatsIncludedListTwo", isDutch),
              getTranslation("whatsIncludedListThree", isDutch),
              getTranslation("whatsIncludedListFour", isDutch),
            ]}
            icon={PaymentBasicIcon}
            isPopular
            onClick={() => handlePayment(yearlyPriceId)}
            isDisabled={isLoading}
            isLoading={isLoading}
            popularText={getTranslation("popular", isDutch)}
            buttonLabel={getTranslation("getStarted", isDutch)}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentCards;
