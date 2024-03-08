import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
//
import { Button, Form, Select, Dropdown, Space } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const FastBuy = () => {
  return (
    <div className="flex shadow-xl items-center border rounded border-gray-100 w-[1200px] bg-white">
      {/* <ChooseMovie></ChooseMovie> */}
      <Form variant="filled" className="fast-buy flex items-center">
        <Space>
          <Select
            onChange={handleChange}
            placeholder="Chọn phim"
            className="border-none w-72 h-14"
            options={[
              { value: "Yiminghe", label: "yiminghe" },
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
            ]}
          />
          <Select
            onChange={handleChange}
            placeholder="Chọn ngày"
            disabled
            className="border-none w-52 h-14"
            options={[
              { value: "Yiminghe", label: "yiminghe" },
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
            ]}
          />
          <Select
            onChange={handleChange}
            disabled
            placeholder="Chọn xuất"
            className="border-none w-52 h-14"
            options={[
              { value: "Yiminghe", label: "yiminghe" },
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
            ]}
          />
        </Space>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const ChooseMovie = () => {
  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <div className="px-8 py-4 w-72">
      <Dropdown menu={{ items }} trigger={["click"]} className="cursor-pointer">
        <a
          onClick={(e) => e.preventDefault()}
          className="flex items-center justify-between"
        >
          <Space>
            <div className="flex items-center gap-x-2">
              <div className="bg-primary rounded-full w-5 h-5 flex items-center justify-center text-white">
                <span>1</span>
              </div>
              <span>Chọn phim</span>
            </div>
          </Space>
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default FastBuy;
