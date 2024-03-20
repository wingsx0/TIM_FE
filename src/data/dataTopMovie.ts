import { ITopMovie } from "@/interface/iTopMovie";

export const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 4, 5],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#fff",
    },
    {
      label: "Dataset 2",
      data: [2, 3, 1, 4, 5],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "#fff",
    },
    {
      label: "Dataset 3",
      data: [5, 1, 3, 5, 2],
      borderColor: "rgb(29, 212, 170)",
      backgroundColor: "#fff",
    },
  ],
};

export const topMovie: ITopMovie[] = [
  {
    id: 1,
    image:
      "https://cdn.galaxycine.vn/media/2024/2/23/kungfu-panda-4-500_1708659195441.jpg",
    name: "Kung Fu Panda 4",
    director: "DreamWorks Animation",
    country: "Trung quốc",
    duration: 90,
    view: 900,
  },
  {
    id: 2,
    image:
      "https://cdn.galaxycine.vn/media/2024/2/21/qu-co-thua-ke-2-500_1708503483342.jpg",
    name: "Quý Cô Thừa Kế 2",
    director: "Blue Moon Communications",
    country: "Việt Nam",
    duration: 90,
    view: 600,
  },
  {
    id: 3,
    image:
      "https://cdn.galaxycine.vn/media/2024/2/22/dune-2-500_1708588988385.jpg",
    name: "Dune: Hành Tinh Cát - Phần Hai",
    director: "Warner Bros",
    country: "Mỹ",
    duration: 90,
    view: 1900,
  },
  {
    id: 4,
    image:
      "https://cdn.galaxycine.vn/media/2024/3/8/tieng-yeu-khong-loi-500_1709869385632.jpg",
    name: "Tiếng Yêu Không Lời",
    director: "Đang cập nhật",
    country: "Nhật bản",
    duration: 90,
    view: 100,
  },
];
