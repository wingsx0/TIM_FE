import React from "react";
import { toggleSeat } from "@/redux/features/RoomSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
interface ISeat {
  text?: string;
  booking?: boolean;
}

const ve = [
  {
    name: "a1",
  },
  {
    name: "a7",
  },
  {
    name: "h7",
  },
];
const data = {
  hang: 11,
  cot: 15,
};

const datSeat: any = [];
for (let i = 0; i < data.hang; i++) {
  const row = String.fromCharCode(97 + i);
  const cols = [];
  for (let j = 0; j < data.cot; j++) {
    cols.push({
      key: `${row}${j + 1}`,
      cot: j + 1,
      hang: row,
    });
  }
  datSeat.push(cols);
}

const Room = () => {
  return (
    <ul className="md:mb-8 w-auto grid grid-cols-1 items-center flex-auto">
      {datSeat
        ?.slice()
        ?.reverse()
        .map((row: any) => (
          <li
            className="flex justify-between mb-3 md:gap-0 gap-1 flex-nowrap"
            key={row.key}
          >
            <div className="text-sm text-grey-40 font-medium flex-none w-5 text-left text-black4">
              {row[0]?.hang?.toUpperCase()}
            </div>
            <div className="flex md:gap-4 gap-3 grow justify-center min-w-[398px] flex-1">
              {row.map((seat: any) => (
                <Seat key={seat.key} id={seat.key}>
                  {seat.cot}
                </Seat>
              ))}
            </div>
            <div className="text-sm text-grey-40 font-medium flex-none w-5 text-right text-black43 ">
              {row[0]?.hang?.toUpperCase()}
            </div>
          </li>
        ))}
    </ul>
  );
};

const Seat = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const [isBooking, setIsBooking] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const booked = "border-grey-20 bg-gray-300 border-gray-300 text-black43 ";
  const unbooked = "xl:hover:bg-primary xl:hover:border-primary text-black43 ";
  const booking = "bg-primary text-white";
  const dispatch = useDispatch<AppDispatch>();
  const handleAddSeat = () => {
    setIsActive(!isActive);
    dispatch(toggleSeat(id));
  };
  React.useEffect(() => {
    ve.map((item) => {
      if (item.name === id) {
        return setIsBooking(true);
      }
    });
  }, [id]);
  return (
    <button
      className={`md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out md:w-5 w-4 leading-[16px] ${
        isBooking ? booked : unbooked
      } ${isActive ? booking : ""}`}
      onClick={handleAddSeat}
    >
      <span className="inline-block md:w-5 w-4 text-center">{children}</span>
    </button>
  );
};

export default Room;
