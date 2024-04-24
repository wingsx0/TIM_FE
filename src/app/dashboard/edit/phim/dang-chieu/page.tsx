import BorderHeading from "@/components/text/BorderHeading";
import TableMovie from "../TableMovie";
import { endPointMovieLoai } from "@/utils/api";

const Page = async () => {
  const res = await fetch(`${endPointMovieLoai}/1`);
  const data = await res.json();
  return (
    <>
      <div className="mb-10 bg-white py-2">
        <BorderHeading uppercase>Danh sách phim đang chiếu</BorderHeading>
        <div className="px-6">
          <TableMovie movies={data}></TableMovie>
        </div>
      </div>
    </>
  );
};

export default Page;
