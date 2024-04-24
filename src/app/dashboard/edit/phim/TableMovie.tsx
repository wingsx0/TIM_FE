"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Tooltip,
  Typography,
} from "antd";
import Link from "next/link";
import { IMovie } from "@/interface/iTopMovie";
import {
  DeleteOutlined,
  DiffOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import {
  handleDeleteMovieAction,
  handleHiddenMovieAction,
} from "@/actions/movie";

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: IMovie;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Vui lòng không được để trống ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

interface IProps {
  movies: IMovie[];
}
const TableMovie = (props: IProps) => {
  const { movies } = props;
  const [form] = Form.useForm();
  const [data, setData] = useState(movies);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: IMovie) =>
    record.id_phim.toString() === editingKey;

  const cancel = () => {
    setEditingKey("");
  };
  const handleDelete = (movie: IMovie) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa phim ?")) {
      // Xử lý khi người dùng chọn "OK"
      console.log("Người dùng đã chọn OK");
      return handleDeleteMovieAction(movie);
    } else {
      // Xử lý khi người dùng chọn "Cancel" hoặc đóng hộp thoại
      console.log("Người dùng đã chọn Cancel hoặc đóng hộp thoại");
    }
  };

  const columns = [
    {
      title: "Tên phim",
      dataIndex: "ten_phim",
      width: "25%",
    },
    {
      title: "Đạo diễn",
      dataIndex: "dao_dien",
      width: "15%",
    },
    {
      title: "Thời lượng",
      dataIndex: "thoi_luong",
      width: "15%",
      render: (text: number) => <span>{text} phút</span>,
    },
    {
      title: "ngày chiếu",
      dataIndex: "ngay_chieu",
      width: "20%",
      render: (text: number) => <span>{text}</span>,
    },
    {
      title: "Độ tuổi",
      dataIndex: "tuoi",
      width: "7%",
      render: (text: number) => <span>{text}</span>,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_: any, record: IMovie) => {
        return (
          <div className="flex items-center gap-x-3">
            <Link href={`/dashboard/edit/phim/${record.id_phim}`}>
              <Tooltip title="Chi tiết">
                <div className="text-white bg-primary py-1 px-2 rounded">
                  <DiffOutlined className="text-lg" />
                </div>
              </Tooltip>
            </Link>
            <div
              className={`${
                record.hidden ? "bg-[#6aa740]" : "bg-[#0a85fc]"
              } text-white rounded py-1 px-2 shadow-sm`}
            >
              {record.hidden ? (
                <Tooltip title="Đã ẩn">
                  <button
                    onClick={() => {
                      return handleHiddenMovieAction(record, 0);
                    }}
                  >
                    <EyeInvisibleOutlined className="text-lg" />
                  </button>
                </Tooltip>
              ) : (
                <Tooltip title="Chưa ẩn">
                  <button
                    onClick={() => {
                      return handleHiddenMovieAction(record, 1);
                    }}
                  >
                    <EyeOutlined className="text-lg" />
                  </button>
                </Tooltip>
              )}
            </div>
            <div className="bg-red-500 text-white rounded py-1 px-2 shadow-sm">
              <Tooltip title="Xóa phim">
                <button onClick={() => handleDelete(record)}>
                  <DeleteOutlined className="text-lg " />
                </button>
              </Tooltip>
            </div>
          </div>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col) {
      return col;
    }
    return {
      ...col,
      onCell: (record: IMovie) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default TableMovie;
