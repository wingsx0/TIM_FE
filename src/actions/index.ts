"use server";

import { IBanner } from "@/interface/iBanner";
import { endPointBanner } from "@/utils/api";
import { revalidateTag } from "next/cache";

export const handleCreateBannerAction = async (data: IBanner) => {
  const res = await fetch(endPointBanner, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("list-banners");
  // console.log("Them thanh cong banner");
  return await res.json();
};
