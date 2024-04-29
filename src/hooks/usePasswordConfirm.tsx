import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

const usePasswordConfirm = () => {
  const [visible, setVisiblity] = useState(false);
  const iconC: any = visible ? (
    <EyeInvisibleOutlined
      onClick={() => setVisiblity((visiblity) => !visiblity)}
    />
  ) : (
    <EyeOutlined onClick={() => setVisiblity((visiblity) => !visiblity)} />
  );
  const inputTypeC: any = visible ? "text" : "password";
  return [inputTypeC, iconC];
};
export default usePasswordConfirm;
