import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllusers } from "../../../../Redux/Action";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Blocked",
    dataIndex: "blocked",
    key: "blocked",
    render: (blocked) => (blocked ? "Yes" : "No"),
  },
];

const UserTable = () => {
  const dispatch = useDispatch();
  const { allUsers, loading } = useSelector(
    (state) => state.GetAllUsersReducer
  );

  useEffect(() => {
    if (!allUsers) dispatch(fetchAllusers());
  }, []);

  return (
    <Table loading={loading} columns={columns} dataSource={allUsers?.data} />
  );
};
export default UserTable;
