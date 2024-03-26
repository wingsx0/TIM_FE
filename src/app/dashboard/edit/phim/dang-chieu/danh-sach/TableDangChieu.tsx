"use client";
import React, { useState } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import Link from "next/link";
import { EditOutlined } from "@ant-design/icons";
import { IBanner } from "@/interface/iBanner";

interface IBannerTest {
  id: number;
  key: string;
  img: string;
  link: string;
  noi_dung: string;
  tieu_de: string;
}

const newData: IBanner[] = [
  {
    id: 1,
    img: "",
    link: "",
    noi_dung: "",
    tieu_de: "",
  },
  {
    id: 2,
    img: "",
    link: "",
    noi_dung: "",
    tieu_de: "",
  },
  {
    id: 3,
    img: "",
    link: "",
    noi_dung: "",
    tieu_de: "",
  },
];
const originData: IBannerTest[] = newData.map((data) => {
  return { ...data, key: data.id.toString() };
});

// const originData: IBannerTest[] = [
//   {
//     id: 1,
//     img: "",
//     link: "",
//     key: "1",
//     noi_dung: "",
//     tieu_de: "",
//   },
// ];
// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: IBannerTest;
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
const TableDangChieu = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: IBannerTest) => record.key === editingKey;

  const edit = (record: Partial<IBannerTest> & { key: React.Key }) => {
    form.setFieldsValue({ name: "", age: "", address: "", ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as IBannerTest;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "img",
      width: "25%",
      editable: true,
    },
    {
      title: "Đường dẫn",
      dataIndex: "Link",
      width: "15%",
      editable: true,
    },
    {
      title: "Nội dung",
      dataIndex: "noi_dung",
      width: "40%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_: any, record: IBannerTest) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <div className="flex items-center gap-x-3">
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              <EditOutlined className="w-5 h-5" />
            </Typography.Link>
            <Link href="/dashboard/edit/phim/dang-chieu/detail">Chi tiết</Link>
          </div>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: IBannerTest) => ({
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

export default TableDangChieu;
