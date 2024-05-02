import { setKeyword } from "@/redux/features/searchSlice";
import { AppDispatch } from "@/redux/store";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const InputSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [keywordValue, setKeywordValue] = React.useState("");
  const handleSubmitKey = (e: any) => {
    dispatch(setKeyword(keywordValue));
    router.push("/tim-kiem");
  };
  return (
    <Link
      href="/tim-kiem"
      onClick={handleSubmitKey}
      className="bg-primary h-full text-white py-1 px-3 w-10 rounded flex items-center  cursor-pointer"
    >
      <SearchOutlined />
    </Link>
  );
};

export default InputSearch;
