"use client";
import { Button, Form, FormProps, Input, Modal } from "antd";
import React, { useState } from "react";
type FieldType = {
  img?: string;
  link?: string;
  noi_dung?: string;
  tieu_de?: string;
};
const ButtonPut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button
        className="block font-medium text-lg text-white px-20 rounded py-2 bg-primary"
        onClick={showModal}
      >
        Sửa
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ContentModal></ContentModal>
      </Modal>
    </>
  );
};

const ContentModal = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Hình ảnh"
          name="img"
          rules={[
            { required: true, message: "vui lòng không bỏ trống hình ảnh!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Đường dẫn"
          name="link"
          rules={[
            { required: true, message: "vui lòng không bỏ trống đường dẫn!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Tiêu đề"
          name="tieu_de"
          rules={[
            { required: true, message: "vui lòng không bỏ trống Tiêu đề!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Nội dung"
          name="noi_dung"
          rules={[
            { required: true, message: "vui lòng không bỏ trống Nội dung!" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="mt-4 px-20 ">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ButtonPut;
