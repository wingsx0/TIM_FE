import { setKeyword } from "@/redux/features/searchSlice";
import { AppDispatch } from "@/redux/store";
import { SearchOutlined } from "@ant-design/icons";
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
    <div className="bg-white px-4 py-1 flex items-center relative border border-borderGray rounded text-black3 text-sm overflow-hidden">
      <input
        type="text"
        placeholder="Tìm kiếm...."
        onChange={(e: any) => setKeywordValue(e.target.value)}
      />
      <span
        onClick={handleSubmitKey}
        className="bg-primary h-full text-white absolute right-0 top-2/4 -translate-y-2/4 flex items-center px-1 cursor-pointer"
      >
        <SearchOutlined />
      </span>
    </div>
  );
};

export default InputSearch;
