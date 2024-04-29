"use server";

import { IUser } from "@/interface/IUser";
import { endPointUserSignIn } from "@/utils/api";

export const handleSignInAction = async (data: IUser) => {
  const res = await fetch(endPointUserSignIn, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  console.log(res);
  return await res.json();
};
