import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllusers } from "../../../../Redux/Action";
import { getTranslation } from "../../../../utils/getTranslation";

const UserTable = () => {
  const dispatch = useDispatch();
  const isDutch = useSelector((state) => state.ChangeLanguageReducer.isDutch);

  const { allUsers, loading } = useSelector(
    (state) => state.GetAllUsersReducer
  );

  useEffect(() => {
    if (!allUsers) dispatch(fetchAllusers());
  }, []);

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
      title: getTranslation("blocked", isDutch),
      dataIndex: "blocked",
      key: "blocked",
      render: (blocked) => (blocked ? "Yes" : "No"),
    },
  ];
  return (
    <Table loading={loading} columns={columns} dataSource={allUsers?.data} />
  );
};
export default UserTable;
