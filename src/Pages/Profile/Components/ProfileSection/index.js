import React, { useEffect, useState } from "react";
import "./profileSection.css";
import { Form } from "antd";
import CustomButton from "../../../Components/CustomButton";
import api from "../../../../utils/axiosInstance";
import { endpoints } from "../../../../utils/endpoints";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllusers, loginSuccess } from "../../../../Redux/Action";
import { formatErrors } from "../../../../utils/ErrorHandler";
import { updateUserService } from "../../../../Redux/Services/updateUserService";
import { getSpecificUser } from "../../../../Redux/Services/getSpecificUser";
import { getTranslation } from "../../../../utils/getTranslation";

function ProfileSection() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const userInfo = useSelector((state) => state.AuthReducer.user);
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  console.log("Profile section info", userInfo);

  const [form] = Form.useForm();

  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue({
        name: userInfo?.name || "",
        email: userInfo?.email || "",
      });
    } else {
      form.resetFields(); // Reset fields when editAbleUser is null
    }
  }, [userInfo, form]);

  const handleUpdateUser = async (values) => {
    try {
      setIsLoading(true);
      const data = {
        name: values?.name,
      };
      const response = await api.post(endpoints.updateUserProfile(), data);
      console.log("response", response);
      if (response.status === 200) {
        const res = await api.get(endpoints.getUserProfile());
        console.log("spefic user response", res);
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
        dispatch(loginSuccess(res?.data?.data));
        toast.success("Updated Successfully");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      let formatedErrors;
      if (error?.response?.data?.errors) {
        formatedErrors = formatErrors(error?.response?.data?.errors);
        console.log("error =>", formatedErrors);
      }
      setIsLoading(false);

      toast.error(
        <div
          dangerouslySetInnerHTML={{
            __html: `Unable to process your request.<br>${
              formatedErrors ? formatErrors : ""
            }`,
          }}
        />
      );
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    handleUpdateUser(values);
  };
  return (
    <div className="profile-section-main">
      <p className="profile-section-heading">
        {getTranslation("editProfile", isDutch)}
      </p>

      <Form form={form} onFinish={onFinish} className="profile-form">
        <div className="profile-inputs-wrapper">
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
              class="profile-input"
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
              class="profile-input"
              placeholder="Enter your email"
              disabled={true}
            />
          </Form.Item>
        </div>
        <CustomButton
          label={getTranslation("update", isDutch)}
          type={"solid"}
          loading={isLoading}
          disabled={isLoading}
          style={{ alignSelf: "flex-end" }}
        />
      </Form>
    </div>
  );
}

export default ProfileSection;
