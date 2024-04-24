"use server";
import { IMovie } from "./../interface/iTopMovie";
import { endPointMovie } from "@/utils/api";
export const handleCreateMovieAction = async (data: IMovie) => {
  const res = await fetch(endPointMovie, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const handleHiddenMovieAction = async (data: IMovie, hidden: number) => {
  const updateData = { ...data, hidden: hidden };
  const res = await fetch(`${endPointMovie}/${data.id_phim}`, {
    method: "PUT",
    body: JSON.stringify(updateData),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return await res.json();
};

export const handleDeleteMovieAction = async (data: IMovie) => {
  const res = await fetch(`${endPointMovie}/${data.id_phim}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return await res.json();
};
