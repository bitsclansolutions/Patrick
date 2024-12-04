import React, { useEffect, useState } from "react";
import "./manageUsersSection.css";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllusers } from "../../../../Redux/Action";
import ActionButton from "../../../Components/ActionButton";
import EditModal from "../../../Components/Modals/EditModal";
import BlockModal from "../../../Components/Modals/BlockModal";
import DeleteModal from "../../../Components/Modals/DeleteModal";
import { updateUserService } from "../../../../Redux/Services/updateUserService";
import { toast } from "react-toastify";
import { formatErrors } from "../../../../utils/ErrorHandler";
import { blockuserService } from "../../../../Redux/Services/blockUserService";
import { deleteUserService } from "../../../../Redux/Services/deleteUserService";
import { getTranslation } from "../../../../utils/getTranslation";

function ManageUsersSectionTable() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editAbleUser, setEditAbleUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const dispatch = useDispatch();

  const { allUsers, loading } = useSelector(
    (state) => state.GetAllUsersReducer
  );

  useEffect(() => {
    if (!allUsers) dispatch(fetchAllusers());
  }, []);

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };
  const handleEditModalOk = async (updateUser) => {
    try {
      setIsLoading(true);
      console.log("updateUser", updateUser);
      const response = await updateUserService(updateUser);
      console.log("response after update", response);
      if (response?.status === 200) {
        dispatch(fetchAllusers());
        setIsLoading(false);
        setIsEditModalOpen(false);
        toast.success("User Updated Succesfully");
      }
    } catch (error) {
      console.log("error =>", error);
      setIsLoading(false);
      const formatedErrors = formatErrors(error?.response?.data?.errors);
      toast.error(
        <div
          dangerouslySetInnerHTML={{
            __html: `Unable to process your request.<br>${formatedErrors}`,
          }}
        />
      );
    }
  };

  const handleEditModalCancel = () => {
    if (isLoading) {
      return;
    }
    setIsEditModalOpen(false);
  };

  const showBlockModal = () => {
    setIsBlockModalOpen(true);
  };
  const handleBlockModalOk = async () => {
    try {
      setIsLoading(true);
      const id = editAbleUser?.id;
      const blockStatus = editAbleUser?.blocked === 1 ? "unblock" : "block";
      const response = await blockuserService(id, blockStatus);
      if (response?.status === 200) {
        dispatch(fetchAllusers());
        setIsLoading(false);
        setIsBlockModalOpen(false);
        toast.success(
          `${
            editAbleUser?.blocked === 1 ? "unblock" : "Block"
          } User Succesfully`
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error =>", error);
      const formatedErrors = formatErrors(error?.response?.data?.errors);
      toast.error(
        <div
          dangerouslySetInnerHTML={{
            __html: `Unable to process your request.<br>${formatedErrors}`,
          }}
        />
      );
    }
  };
  const handleBlockModalCancel = () => {
    if (isLoading) {
      return;
    }
    setIsBlockModalOpen(false);
  };

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleDeleteModalOk = async () => {
    try {
      setIsLoading(true);
      const id = editAbleUser?.id;
      const response = await deleteUserService(id);
      if (response?.status === 200) {
        dispatch(fetchAllusers());
        setIsLoading(false);

        setIsDeleteModalOpen(false);
        toast.success("Deleted User Succesfully");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error =>", error);
      const formatedErrors = formatErrors(error?.response?.data?.errors);
      toast.error(
        <div
          dangerouslySetInnerHTML={{
            __html: `Unable to process your request.<br>${formatedErrors}`,
          }}
        />
      );
    }
  };
  const handleDeleteModalCancel = () => {
    if (isLoading) {
      return;
    }
    setIsDeleteModalOpen(false);
  };

  const columns = [
    {
      title: getTranslation("name", isDutch),
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: getTranslation("email", isDutch),
      dataIndex: "email",
      key: "email",
    },
    {
      title: getTranslation("paymentStatus", isDutch),
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (_, record) =>
        record?.user_subscription ? record?.user_subscription?.status : "N/A",
    },
    {
      title: getTranslation("paymentPackage", isDutch),
      dataIndex: "paymentPackage",
      key: "paymentPackage",
      render: (_, record) =>
        record?.user_subscription
          ? record?.user_subscription?.subscription_frequency
          : "N/A",
    },
    {
      title: getTranslation("blocked", isDutch),
      dataIndex: "blocked",
      key: "blocked",
      render: (blocked) => (blocked ? "Yes" : "No"),
    },
    {
      title: getTranslation("actions", isDutch),
      dataIndex: "actions",
      key: "actions",
      width: 200,
      render: (_, record) => (
        <>
          <div className="manage-users-actions-wrapper">
            <ActionButton
              label={getTranslation("edit", isDutch)}
              onClick={() => {
                showEditModal();
                console.log("edit values", record);
                setEditAbleUser({ ...record });
              }}
            />
            <ActionButton
              isBlocked={record?.blocked}
              label={getTranslation("block", isDutch)}
              onClick={() => {
                showBlockModal();
                console.log("edit values", record);
                setEditAbleUser({ ...record });
              }}
            />
            <ActionButton
              label={getTranslation("delete", isDutch)}
              onClick={() => {
                showDeleteModal();
                console.log("edit values", record);
                setEditAbleUser({ ...record });
              }}
            />
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="manage-users-section-main">
      <p className="manage-users-heading">ManageUsersTable</p>

      <Table
        loading={loading}
        columns={columns}
        dataSource={allUsers?.data}
        scroll={{ x: "1024px" }}
      />
      <EditModal
        handleModalCancel={handleEditModalCancel}
        handleModalOk={handleEditModalOk}
        isModalOpen={isEditModalOpen}
        editAbleUser={editAbleUser}
        isLoading={isLoading}
      />
      <BlockModal
        handleModalCancel={handleBlockModalCancel}
        handleModalOk={handleBlockModalOk}
        isModalOpen={isBlockModalOpen}
        editAbleUser={editAbleUser}
        isLoading={isLoading}
      />
      <DeleteModal
        handleModalCancel={handleDeleteModalCancel}
        handleModalOk={handleDeleteModalOk}
        isModalOpen={isDeleteModalOpen}
        isLoading={isLoading}
      />
    </div>
  );
}

export default ManageUsersSectionTable;
