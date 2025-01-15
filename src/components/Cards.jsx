import React from "react";

const Cards = () => {
  return (
    <div  className="flex items-center w-full h-screen gap-5 px-32 bg-zinc-200">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card w-full  flex items-center justify-center rounded-xl h-full bg-[#004D43] relative">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-8 py-3 border-2 rounded-full left-10 bottom-2">
            &copy;2019
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="relative flex items-center justify-center card w-1/2  rounded-xl  h-full bg-[#22b9a5]">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-8 py-3 border-2 rounded-full left-10 bottom-2">
            &copy;2019
          </button>
        </div>
        <div className="relative flex items-center justify-center card w-1/2  rounded-xl   h-full bg-[#30ffe3]">
          <img
            className="w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute px-8 py-3 border-2 rounded-full left-10 bottom-2">
            &copy;2019
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
