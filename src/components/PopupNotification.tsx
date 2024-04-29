import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
interface IProps {
  icon?: React.ReactNode;
  title?: string;
  message?: string;
  children?: string;
}
const PopupNotification = (props: IProps) => {
  const { icon, title, message, children } = props;
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: title || "Notification Title",
      description: message || "This is the content of the notification.",
      icon: icon || <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        {children || "Open the notification box"}
      </Button>
    </>
  );
};

export default PopupNotification;
