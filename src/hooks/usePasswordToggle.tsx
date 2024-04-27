import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useState } from "react";

const usePasswordToggle = () => {
  const [visible, setVisiblity] = useState(false);
  const icon: any = visible ? (
    <EyeInvisibleOutlined
      onClick={() => setVisiblity((visiblity) => !visiblity)}
    />
  ) : (
    <EyeOutlined onClick={() => setVisiblity((visiblity) => !visiblity)} />
  );
  const inputType: any = visible ? "text" : "password";
  return [inputType, icon];
};
export default usePasswordToggle;
