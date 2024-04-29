"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usePasswordToggle from "@/hooks/usePasswordToggle";
import TextErrorForm from "@/components/text/TextErrorForm";
import Link from "next/link";
import useNotification from "@/hooks/useNotification";
import { IUser } from "@/interface/IUser";
import { endPointUserSignIn } from "@/utils/api";
import { FrownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { getUser, setIsLogin } from "@/redux/features/authSlice";

const ContentSigin = ({ users }: { users: IUser[] }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const emailExists = (email: string) => {
    return users.some((user) => user.email === email);
  };

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Vui lòng nhập đúng định dạng email !")
        .required("Vui lòng không để trống email !")
        .test("email-exist", "Email này chưa tồn tại !", (value) =>
          emailExists(value)
        ),
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

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(endPointUserSignIn, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (data.payload.status === 401) {
          openNotification({
            message: data.payload.error,
            icon: <FrownOutlined className="text-red-500" />,
          });
        }
        if (data.payload.status === 200) {
          openNotification({
            message: data.payload.message,
          });
          dispatch(setIsLogin(true));
          dispatch(getUser(data.payload.user));
          router.push("/");
        }
        return data;
      });
      // reset();
    } catch (error) {
      console.log("Check errror", error);
    }
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
        <Link href="/signup" className="cursor-pointer text-primary underline">
          &nbsp;Đăng ký tại đây
        </Link>
      </p>
    </>
  );
};

export default ContentSigin;
