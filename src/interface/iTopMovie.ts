export interface IMovie {
  id_phim: number;
  id_loai: number;
  id_the_loai: number;
  id_dsdv_phim: string;
  dao_dien: string;
  ten_phim: string;
  thoi_luong: number;
  ngay_chieu: string;
  quoc_gia: string;
  nha_sx: string;
  noi_dung: string;
  hinh: string;
  trailer: string;
  tuoi: string;
  hidden: number;
}
export interface ITheLoaiMovie {
  id_the_loai: number;
  ten_loai: string;
}
