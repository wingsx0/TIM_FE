export interface IUser {
  ho_ten?: string;
  email: string;
  password: string;
  sdt?: number | null;
  avatar?: string | null;
  gioi_tinh?: string | null;
  ngay_sinh?: string | null;
  role?: number;
}
