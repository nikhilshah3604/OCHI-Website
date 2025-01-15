import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] leading-[3.8vw] font-neueMontreal tracking-tight ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] border-[rgb(148,174,56)] mt-20 pt-14 flex">
        <div className="w-1/2">
          <h1 className="text-7xl"> Our approach:</h1>
          <button className="flex items-center gap-10 px-10 py-6 mt-10 text-white uppercase rounded-full textwhite bg-zinc-800">Read More<div className="w-3 h-3 rounded-full bg-zinc-100">
            
          </div></button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-800  rounded-3xl">
          
        </div>
      </div>
    </div>
  );
};

export default About;
