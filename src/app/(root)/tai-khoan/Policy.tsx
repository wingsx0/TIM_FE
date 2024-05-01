import React from "react";

const Policy = () => {
  return (
    <div className="p-6 text-black3">
      <div>
        <h3 className="text-xl font-medium">Thể lệ</h3>
        <p>
          Chương trình khách hàng thân thiết Galaxy là chương trình ưu đãi dựa
          trên điểm tích lũy của các thành viên gồm Star, G-star, X-star. Với
          mỗi giao dịch tại hệ thống rạp Galaxy, bạn sẽ nhận được điểm thưởng
          tương ứng. Hình thức tích lũy như sau:
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-medium">1 STAR = 1.000 VNĐ</h3>
      </div>
      <div>
        <span>
          <span className="font-medium">Star:</span> Tích lũy ở mức 3% trên tổng
          giá trị/số tiền giao dịch
        </span>
        <div>
          <p>
            <span className="font-medium">G-Star:</span> Tích lũy ở mức 5% trên
            tổng giá trị/số tiền giao dịch X-Star: Tích lũy ở mức 10% trên tổng
            giá trị/số tiền giao dịch Điểm tích lũy được gọi là Stars Ví dụ:
            Khách hàng là thành viên hạng Star, khi phát sinh giao dịch 200.000
            đồng, được tích điểm ở mức 3% tương đương 6 Stars (6 Điểm)
          </p>
          <ul>
            <li>
              - Từ 0.1 đến 0.4: làm tròn xuống (Ví dụ: 3.2 điểm sẽ được tích vào
              tài khoản 3 điểm)
            </li>
            <li>
              - Từ 0.5 đến 0.9: làm tròn lên (Ví dụ: 3.5 điểm sẽ được tích vào
              tài khoản 4 điểm)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">Cấp độ thành viên</h3>
          <div>
            <p>
              <span className="font-medium">Star:</span> là thành viên thân
              thiết có tổng chi tiêu trong năm dưới 2,000,000 đồng tính từ ngày
              1/1-31/12
            </p>
            <p>
              <span className="font-medium">G-star</span> là thành viên thân
              thiết có tổng chi tiêu trong năm từ 2,000,000 đồng đến 3,999,999
              đồng tính từ ngày 1/1-31/12.
            </p>
            <p>
              <span className="font-medium">X-star</span> là thành viên thân
              thiết có tổng chi tiêu từ 4,000,000 đồng trở lên tính từ ngày
              1/1-31/12
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium">Lưu ý:</h3>
          <ul className="list-disc ml-6">
            <li>
              Thông tin định danh thành viên gồm có email và số điện thoại bắt
              buộc phải hợp lệ.
            </li>
            <li>
              <span className="font-medium">Email không hợp lệ</span> là email
              không có thực tại thời điểm
              <span className="font-medium"> Infinity</span> rà soát dữ liệu
              thành viên.
            </li>
            <li>
              <span className="font-medium">Số điện thoại không hợp lệ</span> là
              số điện thoại không liên lạc được hoặc số điện thoại không thuộc
              sở hữu của chủ tài khoản thành viên ở thời điểm{" "}
              <span className="font-medium">Infinity</span> rà soát dữ liệu
              thành viên.
            </li>
            <li>
              Với các trường hợp không hợp lệ,{" "}
              <span className="font-medium">Infinity</span> có quyền xóa tài
              khoản thành viên mà không cần thông báo trước.
            </li>
            <li>
              Tài khoản thành viên không có đủ thông tin định danh gồm email và
              số điện thoại hợp lệ,{" "}
              <span className="font-medium">Infinity</span>có quyền xóa tài
              khoản thành viên mà không cần thông báo trước.
            </li>
            <li>Điểm tích lũy có thời hạn sử dụng là 01 năm.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policy;
