"use client";
import React from "react";
import { Button, Form, type FormProps, Input, Select, SelectProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { handleCreateMovieAction } from "@/actions/movie";
import moment from "moment";
import { IMovie } from "@/interface/iTopMovie";

const FormPostMovie = () => {
  const onFinish: FormProps<IMovie>["onFinish"] = (values: IMovie) => {
    const dateString = moment(values.ngay_chieu).format("DD-MM-YYYY");

    console.log("Success:", values);
    handleCreateMovieAction(values);
  };

  const onFinishFailed: FormProps<IMovie>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const optionsTheLoai: SelectProps["options"] = [
    { label: "Hành động", value: 1 },
    { label: "Hoạt hình", value: 2 },
    { label: "Kinh dị", value: 3 },
    { label: "Tâm lý", value: 4 },
    { label: "Tình cảm", value: 5 },
    { label: "Hài hước", value: 6 },
    { label: "Giả tưởng", value: 7 },
  ];
  //   const optionsDienVien: SelectProps["options"]= [{}]

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<IMovie>
        label="Loại phim"
        name="id_loai"
        rules={[
          { required: true, message: "Vui lòng không để trống loại phim!" },
        ]}
      >
        <Select
          options={[
            { value: 1, label: "Đang chiếu" },
            { value: 2, label: "Sắp chiếu" },
          ]}
          placeholder="Chọn loại phim"
        />
      </Form.Item>
      <Form.Item<IMovie>
        label="Tên phim"
        name="ten_phim"
        rules={[
          { required: true, message: "Vui lòng không để trống tên phim!" },
        ]}
      >
        <Input placeholder="Nhập tên phim" />
      </Form.Item>

      <Form.Item<IMovie>
        label="Thể loại phim"
        name="id_the_loai"
        rules={[
          { required: true, message: "Vui lòng không bỏ trống thể loại phim!" },
        ]}
      >
        <Select
          // mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Nhập thể loại phim"
          options={optionsTheLoai}
        />
      </Form.Item>

      {/* <Form.Item<FieldType>
        label="Thể loại phim"
        name="id_the_loai"
        rules={[
          { required: true, message: "Vui lòng không bỏ trống thể loại phim!" },
        ]}
      >
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Nhập thể loại phim"
          options={}
        />
      </Form.Item> */}
      <Form.Item<IMovie>
        label="Thời lượng phim"
        name="thoi_luong"
        rules={[
          {
            required: true,
            message: "Vui lòng không để trống thời lượng phim!",
          },
        ]}
      >
        <Input type="number" placeholder="Nhập thời lượng phim" />
      </Form.Item>
      <Form.Item<IMovie>
        label="Đạo diễn"
        name="dao_dien"
        rules={[
          { required: true, message: "Vui lòng không để trống tên đạo diễn!" },
        ]}
      >
        <Input placeholder="Nhập tên đạo diễn" />
      </Form.Item>
      {/* <Form.Item<FieldType>
        label="Ngày chiếu phim"
        name="ngay_chieu"
        rules={[
          {
            required: true,
            message: "Vui lòng không để trống ngày chiếu phim!",
          },
        ]}
      > */}
      <Form.Item<IMovie>
        label="Ngày sản xuất"
        name="ngay_chieu"
        rules={[
          { required: true, message: "Vui lòng không để trống ngày chiếu!" },
        ]}
      >
        <Input placeholder="Nhập ngày chiều" />
      </Form.Item>
      {/* <DatePicker format="DD-MM-YY" placeholder="dd/mm/yy" /> */}
      {/* </Form.Item> */}
      <Form.Item<IMovie>
        label="Quốc gia"
        name="quoc_gia"
        rules={[
          {
            required: true,
            message: "Vui lòng không để trống quốc gia!",
          },
        ]}
      >
        <Input placeholder="Nhập quốc gia" />
      </Form.Item>
      <Form.Item<IMovie>
        label="Nhà sản xuất"
        name="nha_sx"
        rules={[
          {
            required: true,
            message: "Vui lòng không để trống nhà sản xuất!",
          },
        ]}
      >
        <Input placeholder="Nhập nhà sản xuất" />
      </Form.Item>
      <Form.Item<IMovie>
        label="Độ tuổi có thể xem"
        name="tuoi"
        rules={[
          {
            required: true,
            message: "Vui lòng không để trống tuổi!",
          },
        ]}
      >
        <Input type="number" placeholder="Nhập độ tuổi có thể xem" />
      </Form.Item>
      <Form.Item<IMovie>
        label="Đường dẫn hình ảnh"
        name="hinh"
        rules={[
          {
            required: true,
            message: "Vui lòng không để trống hình ảnh!",
          },
        ]}
      >
        <Input placeholder="Nhập độ đường dẫn hình ảnh " />
      </Form.Item>
      <Form.Item<IMovie>
        label="Đường dẫn trailer"
        name="trailer"
        rules={[
          {
            required: true,
            message: "Vui lòng không để trống trailer!",
          },
        ]}
      >
        <Input placeholder="Nhập đường dẫn trailer " />
      </Form.Item>
      <Form.Item<IMovie>
        label="Nội dung"
        name="noi_dung"
        rules={[
          {
            required: true,
            message: "Vui lòng không để trống nội dung!",
          },
        ]}
      >
        <TextArea placeholder="Nhập nội dung " />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormPostMovie;
