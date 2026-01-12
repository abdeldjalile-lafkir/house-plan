import React from "react";
import { DrainingPipe } from "@/components/shared";

function Draining() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-x-10">
      <GroundFloor />
      <FirstFloor />
    </div>
  );
}

export default Draining;

function GroundFloor() {
  return (
    <div className="flex gap-30">
      <div className="w-150 h-151 border-black border-2 relative bg-white shadow-2xl">
        {/* Top Section */}
        <div className="w-full h-52.5 border-black border-b-2 relative bg-gray-50"></div>

        {/* Bottom Section */}
        <div className="w-full h-97.5 flex relative">
          {/* Left partition 1 */}
          <div className="w-52.5 h-full border-r-2 border-black bg-gray-50"></div>

          {/* Left partition 2 */}
          <div className="w-52.5 h-full border-r-2 border-black bg-gray-50"></div>

          {/* Right Wing */}
          <div className="w-45 h-full relative flex">
            {/* Right corridor */}
            <div className="w-15 h-full relative bg-gray-50"></div>

            {/* Right rooms */}
            <div className="w-30 h-full relative flex flex-col">
              {/* Upper room */}
              <div className="w-30 h-37.5 relative bg-gray-50 border-b border-black border-l-2">
                <DrainingPipe.PipeJunction
                  type="primary"
                  position="top-[30px] right-[30px]"
                />
                <DrainingPipe.PrimaryVerticalPipe
                  length={60}
                  position="top-[45px] bottom-[45px] right-[30px]"
                />
                <DrainingPipe.PipeJunction
                  type="primary"
                  position="bottom-[30px] right-[30px]"
                />
                <DrainingPipe.PrimaryVerticalPipe
                  length={300}
                  position="top-[122.5px] right-[30px]"
                />
              </div>

              {/* Middle room */}
              <div className="w-30 h-45 relative border-t border-black bg-gray-50"></div>

              {/* Lower room */}
              <div className="w-30 h-15 bg-gray-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstFloor() {
  return (
    <div className="flex gap-x-30">
      <div className="w-150 h-166 flex border-black border-2 relative bg-white shadow-2xl">
        {/* Left Section */}
        <div className="w-52.5 h-full flex flex-col border-black border-r-2 relative">
          <div className="relative bg-gray-50 w-full h-90 border-b border-black"></div>
          <div className="relative bg-gray-50 w-full h-75 border-t border-black"></div>
        </div>

        {/* Middle Section */}
        <div className="w-52.5 h-full border-black border-r-2 relative">
          <div className="relative bg-gray-50 w-full h-105 border-b-2"></div>
          <div className="relative bg-gray-50 w-full h-60">
            <DrainingPipe.PipeJunction
              type="primary"
              position="bottom-[5px] right-[30px]"
            />
            <DrainingPipe.PrimaryHorizontalPipe
              length={115}
              position="bottom-[5px] left-[45px] right-[50px]"
            />
            <DrainingPipe.PipeJunction
              type="primary"
              position="bottom-[5px] left-[30px]"
            />
            <DrainingPipe.PrimaryHorizontalPipe
              length={185}
              position="bottom-[5px] -right-[160px]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-45 h-full relative">
          {/* Top room */}
          <div className="relative bg-gray-50 w-full h-52.5 border-b-2 border-black"></div>

          {/* Second room */}
          <div className="relative bg-gray-50 w-full h-37.5 border-b-2 border-black">
            <DrainingPipe.PipeJunction
              type="primary"
              position="top-[20px] left-[30px]"
            />
            <DrainingPipe.PrimaryHorizontalPipe
              length={100}
              position="top-[20px] left-[50px] right-[45px]"
            />
            <DrainingPipe.PipeJunction
              type="primary"
              position="top-[20px] right-[5px]"
            />
            <DrainingPipe.PrimaryVerticalPipe
              length={75}
              position="top-[35px] bottom-[45px] right-[5px]"
            />
            <DrainingPipe.PipeJunction
              type="primary"
              position="bottom-[20px] right-[5px]"
            />
            <DrainingPipe.PrimaryVerticalPipe
              length={300}
              position="top-[130px] right-[5px]"
            />
          </div>

          {/* Bottom area with corridor */}
          <div className="w-full relative flex">
            {/* Corridor */}
            <div className="w-15 h-full relative bg-gray-50"></div>

            {/* Staircase area */}
            <div className="w-30 h-full relative flex flex-col">
              {/* Staircase room */}
              <div className="w-30 h-45 relative border-black bg-gray-50"></div>

              {/* Space before staircase */}
              <div className="w-30 h-15 bg-gray-50"></div>
            </div>
          </div>

          {/* Bottom room */}
          <div className="relative bg-gray-50 w-full h-15">
            <DrainingPipe.PipeJunction
              type="primary"
              position="bottom-[5px] right-[5px]"
            />
            <DrainingPipe.PrimaryVerticalPipe
              length={50}
              position="top-[58px] bottom-[45px] right-[5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
