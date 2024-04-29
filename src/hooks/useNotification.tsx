import { SmileOutlined } from "@ant-design/icons";
import { notification } from "antd";
import React from "react";
interface INotification {
  icon?: React.ReactNode;
  title?: string;
  message?: string;
}
const useNotification = () => {
  const openNotification = (props: INotification) => {
    const { icon, title, message } = props;
    notification.open({
      message: title || "Notification Title",
      description: message || "This is the content of the notification.",
      icon: icon || <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  return openNotification;
};

export default useNotification;
