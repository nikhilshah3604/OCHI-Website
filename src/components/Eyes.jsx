import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const[rotate,setRotate]=useState(0);
  
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
      setRotate(angle-180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.6" className='w-full h-full bg-[url("./src/assets/img/greenbackground.jpeg")] bg-cover bg-center relative'>
        <div className="absolute   top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="bg-white w-[16vw] h-[16vw] rounded-full flex items-center justify-center">
            <div className="bg-black w-2/3 h-2/3 rounded-full  relative">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">
                <div className="bg-white w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[16vw] h-[16vw] rounded-full flex items-center justify-center">
            <div className="bg-black w-2/3 h-2/3 rounded-full flex items-center justify-center relative  ">
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">
                <div className="bg-white w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
