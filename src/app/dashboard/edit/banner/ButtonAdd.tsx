import React, { useState } from "react";
import { Button, Form, FormProps, Input, Modal } from "antd";
import { handleCreateBannerAction } from "@/actions";

type FieldType = {
  img?: string;
  link?: string;
  noi_dung?: string;
  tieu_de?: string;
};

const ButtonAdd = () => {
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
      <div className="flex justify-end mb-3">
        <button
          className="px-7 py-3 bg-primary rounded text-white font-medium"
          onClick={showModal}
        >
          Thêm banner
        </button>
      </div>
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
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const res = await handleCreateBannerAction(values);
    console.log("Banner created:", res);
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

export default ButtonAdd;
