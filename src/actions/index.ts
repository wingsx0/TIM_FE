"use server";

import { endPointBanner } from "@/utils/api";

export const handleCreateBannerAction = async (data: any) => {
  const res = await fetch(endPointBanner, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
