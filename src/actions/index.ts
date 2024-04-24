"use server";

import { IMovie } from "@/interface/iTopMovie";
import { endPointBanner } from "@/utils/api";

export const handleCreateBannerAction = async (data: IMovie) => {
  const res = await fetch(endPointBanner, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
