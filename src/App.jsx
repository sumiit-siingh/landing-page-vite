import React from "react";
import { IoMdFlower } from "react-icons/io";

function App() {
  return (
    <div className="h-screen w-screen bg-red-400 relative overflow-hidden">
      <img
        src="https://res.cloudinary.com/dq829orud/image/upload/v1750523648/20250619_1044_Grain_Gradient_Sphere_remix_01jy39njjefmdr1fmd6py1dzyx_em2dqd.png"
        className="w-full h-full object-cover"
        alt="background"
      />

      {/* Circle - BEHIND the navbar */}
      <div className="absolute -top-24 left-0 w-full h-full flex items-center justify-center ">
        <div className="border-b flex items-center justify-center border-l border-r border-white  rounded-full h-215 w-220  opacity-30">
          <div className="border-b -translate-y-3 flex items-center justify-center border-l border-r border-white  rounded-full h-170 w-170  opacity-80">
            <div className="border-b  border-l border-r border-white  rounded-full h-120 w-120  opacity-80">

            </div>
          </div>
        </div>

      </div>

      {/* Navbar */}
      <div className="absolute top-10 w-full text-white text-md z-10">
        <ul className="flex space-x-6 items-center justify-center">
          <li className="text-red-400 text-xl">
            <IoMdFlower />
          </li>
          <li>Labs</li>
          <li>Sessions</li>
          <li>Resources</li>
          <li>Community</li>
          <button className="bg-gray-800 px-3 py-1 rounded-full">Join Today</button>
        </ul>
      </div>
    </div>
  );
}

export default App;
