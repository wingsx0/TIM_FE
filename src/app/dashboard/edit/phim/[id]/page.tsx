import React from "react";
import ContentDetail from "./ContentDetail";
import { endPointMovie, endPointMovieTheLoai } from "@/utils/api";

const Page = async (props: any) => {
  const { params } = props;
  const id = params.id;
  const res = await fetch(`${endPointMovie}/${id}`);
  const data = await res.json();
  const resTheLoai = await fetch(`${endPointMovieTheLoai}/${data.id_the_loai}`);
  const dataTheLoai = await resTheLoai.json();
  return (
    <>
      <ContentDetail movie={data} the_loai={dataTheLoai} />
    </>
  );
};

export default Page;
