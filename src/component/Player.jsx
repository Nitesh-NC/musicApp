import React from "react";
import { song } from "../assets/assets";
import { FaShuffle } from "react-icons/fa6";
import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
} from "react-icons/tb";
import { RiLoopRightLine } from "react-icons/ri";

import { BsFilePlay } from "react-icons/bs";
import { HiMiniQueueList, HiMiniSpeakerWave } from "react-icons/hi2";
import { CgMiniPlayer } from "react-icons/cg";
import { MdOutlineZoomOutMap } from "react-icons/md";

const Player = () => {
  return (
    <>
      <div className="bg-[#121212] mx-2 flex justify-between rounded items-center text-white pr-2">
        <div className="hidden lg:flex items-center gap-4">
          <img src={song[0].image} alt="song1" className="w-12 rounded-l" />
          <div>
            <p>{song[0].name}</p>
            <p>{song[0].desc.slice(0, 20)}</p>
          </div>
        </div>
        <div className="flex flex-col items-center m-auto ">
          <div className="flex gap-4 ">
            <FaShuffle className="hover:scale-110"/>
            <TbPlayerSkipBackFilled />
            <TbPlayerPlayFilled />
            <TbPlayerSkipForwardFilled />
            <RiLoopRightLine />
          </div>
          <div className="flex items-center gap-5">
            <p>1:60</p>
            <div className="w-[60vw] max-w-lg bg-gray-300 rounded-full">
              <hr className="h-1 border-none w-10 bg-orange-800 rounded-full" />
            </div>
            <p>3:20</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75">
          <BsFilePlay size={12} />
          <HiMiniQueueList size={12}/>
          <HiMiniSpeakerWave size={12}/>
          <div className="w-20 bg-slate-50 h-1 rounded"></div>
          <CgMiniPlayer size={12}/>
          <MdOutlineZoomOutMap size={12}/>
        </div>
      </div>
    </>
  );
};

export default Player;
