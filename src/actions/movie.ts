"use server";
import { ITopMovie } from "./../interface/iTopMovie";
import { endPointMovie } from "@/utils/api";
export const handleCreateMovieAction = async (data: any) => {
  const res = await fetch(endPointMovie, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
