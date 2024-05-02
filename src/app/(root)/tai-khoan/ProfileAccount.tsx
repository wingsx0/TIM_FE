import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  UserIcon,
  DevicePhoneMobileIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { Modal, Radio } from "antd";
import Label from "@/components/text/Label";
import TextErrorForm from "@/components/text/TextErrorForm";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { endPointUsers, endPointUsersChangePass } from "@/utils/api";
import useNotification from "@/hooks/useNotification";
import { useDispatch } from "react-redux";
import { getUser, setIsLogin } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { IUser } from "@/interface/IUser";

const ProfileAccount = () => {
  const [user, setUser] = React.useState({
    ho_ten: "",
    email: "",
    sdt: "",
    password: "",
    gioi_tinh: "",
  });
  const idUser = localStorage.getItem("idUser");
  React.useEffect(() => {
    async function getUser() {
      const res = await fetch(endPointUsers);
      const data = await res.json();
      const user = data.find((user: IUser) => user.id_thanh_vien == idUser);
      setUser(user);
    }
    getUser();
  }, [idUser]);
  return (
    <div className="p-6">
      <form action="">
        <div className="flex justify-between items-center gap-4 flex-wrap mb-4">
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Họ và tên
            </label>
            <div className="flex items-center gap-x-2 text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <UserIcon className="w-5 h-5" />
              <input
                type="text"
                value={user?.ho_ten || "unknown"}
                className="text-ms w-full"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Email
            </label>
            <div className="flex items-center gap-x-2 text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
              <input
                type="text"
                value={user?.email || "unknown"}
                className="text-ms w-full"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Số điện thoại
            </label>
            <div className="flex items-center gap-x-2 text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <DevicePhoneMobileIcon className="w-5 h-5" />
              <input
                type="text"
                value={user?.sdt || "unknown"}
                className="text-ms w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Mật khẩu
            </label>
            <div className="flex items-center gap-x-2 justify-between text-gray4A bg-[#f2f2f2] rounded py-2 px-3">
              <div className="flex items-center gap-x-2">
                <LockClosedIcon className="w-5 h-5" />
                <input
                  type="password"
                  value={user?.password}
                  className="text-ms"
                  disabled
                />
              </div>
              <ButtonChangePass user={user}></ButtonChangePass>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 w-[360px] ">
            <label htmlFor="" className="font-medium text-lg text-black3">
              Giới tính
            </label>
            <Radio.Group value={user?.gioi_tinh || "nam"} disabled>
              <Radio value={"nam"}>Nam</Radio>
              <Radio value={"nu"}>Nữ</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="text-right">
          <button className="bg-primary py-2 px-6 rounded text-white font-medium">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};
const ButtonChangePass = ({ user }: { user: any }) => {
  const router = useRouter();
  const { openNotification, contextHolder } = useNotification();
  const dispatch = useDispatch<AppDispatch>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errForm, setErrForm] = useState("");
  // endPointUsersChangePass

  const schema = yup
    .object({
      email: yup.string().required(),
      password: yup
        .string()
        .required("Vui lòng không để trống mật khẩu hiện tại"),
      newPassword: yup
        .string()
        .required("Vui lòng không để trống mật khẩu !")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Dài ít nhất 8 ký tự, bao gồm ít nhất một ký tự viết hoa, một ký tự viết thường, một số và một ký tự đặc biệt"
        ),
      confirmpass: yup
        .string()
        .required("Vui lòng không để trống xác nhận mật khẩu !")
        .oneOf([yup.ref("newPassword")], "Mật khẩu không trùng nhau !"),
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
  const onSubmit = async (data: FormData) => {
    try {
      const { confirmpass, ...formData } = data;
      const res = await fetch(endPointUsersChangePass, {
        method: "PUT",
        body: JSON.stringify(formData),
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
        if (res.status === 400) {
          return setErrForm(data.payload.message);
        }
        if (res.status === 200) {
          openNotification({
            message: `${data.payload.message}, bạn sẽ được chuyển về trang chủ`,
          });
          localStorage.removeItem("token");
          localStorage.removeItem("idUser");
          setIsModalOpen(false);
          setTimeout(() => {
            router.push("/");
          }, 3000);
          reset();
        }
        return data;
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      {contextHolder}
      <div className="cursor-pointer" onClick={showModal}>
        <span className="text-sm font-medium text-primary">Thay đổi</span>
      </div>
      <Modal
        title="Chỉnh sửa mật khẩu"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 items-center px-10"
        >
          <div className="hidden">
            <input {...register("email")} value={user.email} />
          </div>
          <div className="w-full ">
            <Label>Mật khẩu hiện tại</Label>
            <div className="border border-borderGray h-10 px-3 rounded mt-1">
              <input
                {...register("password")}
                className="w-full h-full"
                placeholder="Nhập mật khẩu hiện tại"
              />
            </div>
            <TextErrorForm>{errForm}</TextErrorForm>
          </div>
          <div className="w-full ">
            <Label>Mật khẩu mới</Label>
            <div className="border border-borderGray h-10 px-3 rounded mt-1">
              <input
                {...register("newPassword")}
                className="w-full h-full"
                placeholder="Nhập mật khẩu mới"
              />
            </div>
            <TextErrorForm>{errors.newPassword?.message}</TextErrorForm>
          </div>
          <div className="w-full ">
            <Label>Xác nhận mật khẩu mới</Label>
            <div className="border border-borderGray h-10 px-3 rounded mt-1">
              <input
                {...register("confirmpass")}
                className="w-full h-full"
                placeholder="Nhập xác nhận mật khẩu mới"
              />
            </div>
            <TextErrorForm>{errors.confirmpass?.message}</TextErrorForm>
          </div>

          <button
            type="submit"
            className="bg-primary w-full text-white rounded h-10"
          >
            <span className="text-base font-medium uppercase">
              Cập nhật mật khẩu mới
            </span>
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ProfileAccount;
