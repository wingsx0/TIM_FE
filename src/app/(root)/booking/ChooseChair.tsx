import React from "react";

const ChooseChair = () => {
  return (
    <div>
      <div className="md:col-span-2 flex items-center gap-x-14 py-4 px-6 bg-white">
        <label className="md:text-base text-sm font-medium inline-block mt-2">
          Đổi suất chiếu
        </label>
        <div className="flex items-center gap-x-3 flex-wrap w-[70%] gap-y-3">
          <span className="px-4 py-2 text-sm font-medium rounded border border-borderGray cursor-pointer hover:bg-primary hover:text-white">
            12:15
          </span>
          <span className="px-4 py-2 text-sm font-medium rounded border border-borderGray bg-primary text-white cursor-pointer">
            12:15
          </span>
        </div>
      </div>
      <div className="mt-8 bg-white py-4 px-6">
        <ul className="md:mb-8 w-auto grid grid-cols-1 items-center flex-auto">
          <li className="flex justify-between mb-3 md:gap-0 gap-1 flex-nowrap">
            <div className="text-sm text-grey-40 font-medium flex-none w-5 text-left text-black4">
              J
            </div>
            <div className="flex md:gap-2 gap-1 grow justify-center min-w-[398px] flex-1">
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  1
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  2
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  3
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  4
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  5
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  6
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  7
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  8
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  9
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  10
                </span>
              </button>
            </div>
            <div className="text-sm text-grey-40 font-medium flex-none w-5 text-right text-black43 ">
              J
            </div>
          </li>
          <li className="flex justify-between mb-3 md:gap-0 gap-1 flex-nowrap">
            <div className="text-sm text-grey-40 font-medium flex-none w-5 text-left text-black4">
              J
            </div>
            <div className="flex md:gap-2 gap-1 grow justify-center min-w-[398px] flex-1">
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  1
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  2
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  3
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] border-grey-20 bg-gray-300 border-gray-300">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  4
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  5
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  6
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  7
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  8
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  9
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  10
                </span>
              </button>
            </div>
            <div className="text-sm text-grey-40 font-medium flex-none w-5 text-right text-black43 ">
              J
            </div>
          </li>
          <li className="flex justify-between mb-3 md:gap-0 gap-1 flex-nowrap">
            <div className="text-sm text-grey-40 font-medium flex-none w-5 text-left text-black4">
              J
            </div>
            <div className="flex md:gap-2 gap-1 grow justify-center min-w-[398px] flex-1">
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  1
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  2
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  3
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  4
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  5
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary invisible"></button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  6
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  7
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  8
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  9
                </span>
              </button>
              <button className="md:h-5 h-4 border rounded text-[10px] transition duration-200 ease-in-out text-white md:w-5 w-4 leading-[16px] xl:hover:bg-primary xl:hover:border-primary">
                <span className="inline-block md:w-5 w-4 text-center text-black43">
                  10
                </span>
              </button>
            </div>
            <div className="text-sm text-grey-40 font-medium flex-none w-5 text-right text-black43 ">
              J
            </div>
          </li>
        </ul>
        <p className="text-center text-xs text-gray4A">Màn hình</p>
        <div className="border-2 border-primary mt-3"></div>
        <div className="text-sm flex md:flex-row flex-col-reverse justify-between items-center py-9 gap-2">
          <div className="flex gap-5">
            <div>
              <span className="w-5 h-5 rounded bg-gray-300 inline-block align-middle"></span>
              <span className="ml-2">Ghế đã bán</span>
            </div>
            <div>
              <span className="w-5 h-5 rounded bg-primary inline-block align-middle"></span>
              <span className="ml-2">Ghế đang chọn</span>
            </div>
          </div>
          <div>
            <span className="w-5 h-5 rounded border border-grey-20 inline-block align-middle"></span>
            <span className="ml-2">Ghế đơn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseChair;
