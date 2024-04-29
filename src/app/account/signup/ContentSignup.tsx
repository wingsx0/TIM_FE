"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usePasswordToggle from "@/hooks/usePasswordToggle";
import TextErrorForm from "@/components/text/TextErrorForm";
import Link from "next/link";
import usePasswordConfirm from "@/hooks/usePasswordConfirm";

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
        .email("Vui lòng nhập đúng định dạng email !")
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
      // sdt: yup
      //   .string()
      //   .required()
      //   .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
      gioi_tinh: yup.string().required(),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [passwordInputType, toggleIcon] = usePasswordToggle();
  const [passwordInputTypeC, toggleIconC] = usePasswordConfirm();

  const handleOnSubmit = (data: any) => {
    const { confirmpass, ...formData } = data;
    console.log(formData);
    reset();
  };
  return (
    <>
      <form
        className="px-10 flex flex-col gap-y-3"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-black3 mb-1">
            Họ và tên
          </label>
          <input
            {...register("ho_ten")}
            className="border border-gray-300 py-2 rounded px-1"
          />
          <TextErrorForm>{errors.ho_ten?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-black3 mb-1">
            Email
          </label>
          <input
            {...register("email")}
            className="border border-gray-300 py-2 rounded px-2"
          />
          <TextErrorForm>{errors.email?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-black3 mb-1">
            Mật khẩu
          </label>
          <div className="border border-gray-300 py-2 rounded px-2 flex items-center justify-between">
            <input
              {...register("password")}
              className="w-full pr-2"
              type={passwordInputType}
            />
            <span>{toggleIcon}</span>
          </div>
          <TextErrorForm>{errors.password?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-black3 mb-1">
            Nhập lại mật khẩu
          </label>
          <div className="border border-gray-300 py-2 rounded px-2 flex items-center justify-between">
            <input
              {...register("confirmpass")}
              className="w-full pr-2"
              type={passwordInputTypeC}
            />
            <span>{toggleIconC}</span>
          </div>
          <TextErrorForm>{errors.confirmpass?.message}</TextErrorForm>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-black3 mb-1">
            Giới tính
          </label>
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

export default ContentSignup;
