import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";

const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = ({
    message,
    description,
    icon,
  }: {
    message?: string;
    description?: string;
    icon?: React.ReactNode;
  }) => {
    api.open({
      message: message || "",
      description: description || "",
      icon: icon || <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };
  return { openNotification, contextHolder };
};

export default useNotification;
