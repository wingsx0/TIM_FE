"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usePasswordToggle from "@/hooks/usePasswordToggle";
import TextErrorForm from "@/components/text/TextErrorForm";
import Link from "next/link";
import usePasswordConfirm from "@/hooks/usePasswordConfirm";
import useNotification from "@/hooks/useNotification";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

const ContentSignup = () => {
  const schema = yup
    .object({
      ho_ten: yup
        .string()
        .required("Vui lòng không để trống họ và tên !")
        .min(6, "Họ và tên tối thiểu là 6 kí tự")
        .max(50, "Họ và tên không được dài quá 50 kí tự !"),
      email: yup
        .string()
        .matches(
          /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
          "Vui lòng nhập đúng định dạng email !"
        )
        .required("Vui lòng không để trống email !"),
      password: yup
        .string()
        .required("Vui lòng không để trống mật khẩu !")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Dài ít nhất 8 ký tự, bao gồm ít nhất một ký tự viết hoa, một ký tự viết thường, một số và một ký tự đặc biệt"
        ),
      confirmpass: yup
        .string()
        .required("Vui lòng không để trống xác nhận mật khẩu !")
        .oneOf([yup.ref("password")], "Mật khẩu không trùng nhau !"),
      sdt: yup
        .string()
        .required()
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
          "Vui lòng nhập đúng định dạng số điện thoại !"
        ),
      gioi_tinh: yup.string().required(),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [passwordInputType, toggleIcon] = usePasswordToggle();
  const [passwordInputTypeC, toggleIconC] = usePasswordConfirm();

  const { openNotification, contextHolder } = useNotification();

  const handleOnSubmit = (data: any) => {
    const { confirmpass, ...formData } = data;
    console.log(formData);
    openNotification({
      message: "Đăng ký thành công",
      description: "Chúc mừng bạn đã đăng ký thành công tài khoản Infinity !",
      icon: <CheckCircleFilled className="text-green-500" />,
    });
    reset();
  };

  return (
    <>
      {contextHolder}
      <form
        className="px-10 flex flex-col gap-y-1"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex flex-col">
          <Label>Họ và tên</Label>
          <div className="flex items-center border border-gray-300 py-2 rounded px-2 gap-x-2">
            <input
              {...register("ho_ten")}
              placeholder="Nhập họ và tên"
              className="w-full"
            />
            {errors.ho_ten && <CloseCircleFilled className="text-red-500" />}
            {dirtyFields.ho_ten && !errors.ho_ten && (
              <CheckCircleFilled className="text-green-500" />
            )}
          </div>
          <TextErrorForm>{errors.ho_ten?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <Label>Email</Label>
          <div className="flex items-center border border-gray-300 py-2 rounded px-2 gap-x-2">
            <input
              {...register("email")}
              placeholder="Nhập email"
              className="w-full"
            />
            {errors.email && <CloseCircleFilled className="text-red-500" />}
            {dirtyFields.email && !errors.email && (
              <CheckCircleFilled className="text-green-500" />
            )}
          </div>
          <TextErrorForm>{errors.email?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <Label>Mật khẩu</Label>
          <div className="border border-gray-300 py-2 rounded px-2 flex items-center justify-between">
            <input
              {...register("password")}
              className="w-full pr-2"
              placeholder="Nhập mật khẩu"
              type={passwordInputType}
            />
            <span>{toggleIcon}</span>
          </div>
          <TextErrorForm>{errors.password?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <Label>Xác nhận mật khẩu</Label>
          <div className="border border-gray-300 py-2 rounded px-2 flex items-center justify-between">
            <input
              {...register("confirmpass")}
              className="w-full pr-2"
              placeholder="Xác nhận mật khẩu"
              type={passwordInputTypeC}
            />
            <span>{toggleIconC}</span>
          </div>
          <TextErrorForm>{errors.confirmpass?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <Label>Số điện thoại</Label>
          <div className="flex items-center border border-gray-300 py-2 rounded px-2 gap-x-2">
            <input
              {...register("sdt")}
              placeholder="Nhập số điện thoại"
              className="w-full"
            />
            {errors.sdt && <CloseCircleFilled className="text-red-500" />}
            {dirtyFields.sdt && !errors.sdt && (
              <CheckCircleFilled className="text-green-500" />
            )}
          </div>
          <TextErrorForm>{errors.sdt?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <Label>Giới tính</Label>
          <select
            className="border border-gray-300 py-2 rounded px-2  "
            {...register("gioi_tinh")}
          >
            <option value="nam">Nam</option>
            <option value="nu">Nữ</option>
            <option value="khac">Khác</option>
          </select>
          <TextErrorForm>{errors.gioi_tinh?.message}</TextErrorForm>
        </div>
        <button type="submit" className="bg-primary rounded text-white py-3">
          Đăng ký
        </button>
      </form>
      <div className="line-default my-3"></div>
      <p className="text-center text-sm ">
        Bạn đã có tài khoản rồi?
        <Link
          href="/account/signin"
          className="cursor-pointer text-primary underline"
        >
          &nbsp;Đăng nhập tại đây
        </Link>
      </p>
    </>
  );
};
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label htmlFor="" className="text-sm mb-1">
      {children}
    </label>
  );
}

export default ContentSignup;
