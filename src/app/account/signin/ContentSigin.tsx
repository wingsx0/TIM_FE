"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usePasswordToggle from "@/hooks/usePasswordToggle";
import TextErrorForm from "@/components/text/TextErrorForm";
import Link from "next/link";
import useNotification from "@/hooks/useNotification";

const ContentSigin = () => {
  const schema = yup
    .object({
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
  const { openNotification, contextHolder } = useNotification();

  const onSubmit = (data: FormData) => {
    openNotification({
      message: "Đăng nhập thành công !",
    });
    console.log(data);
    reset();
  };
  return (
    <>
      {contextHolder}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-10 flex flex-col gap-y-4"
      >
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
        <button type="submit" className="bg-primary rounded text-white py-3">
          Đăng nhập
        </button>
      </form>
      <div className="line-default my-3"></div>
      <p className="text-center text-sm ">
        Bạn đã có tài khoản chưa?
        <Link
          href="/account/signup"
          className="cursor-pointer text-primary underline"
        >
          &nbsp;Đăng ký tại đây
        </Link>
      </p>
    </>
  );
};

export default ContentSigin;
