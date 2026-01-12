import React from "react";
import { Room, Door, Measurement, StairFlight } from "@/components/shared";

function FirstFloor() {
  return (
        <div className="flex flex-col md:flex-row items-start gap-30">
      <div className="w-150 h-166 flex border-black border-2 relative bg-white shadow-2xl">
        {/* Left Section - Main Rooms */}
        <div className="w-52.5 h-full flex flex-col border-black border-r-2 relative">
          <div className="relative">
            <Room
              title="Living Room"
              dimensions="3.5m × 6m = 21m²"
              bgColor="bg-blue-50"
              className="w-full h-90 border-b border-black"
            />
            <Door position="bottom-[5px]" orientation="right" />
          </div>
          <div className="relative">
            <Room
              title="Bed Room"
              dimensions="3.5m × 5m = 17.5m²"
              bgColor="bg-green-50"
              className="w-full h-75 border-t border-black"
            />
            <Door position="top-[5px]" orientation="right" />
          </div>
          <Measurement value="3.5m" position="-top-8 left-0 right-0" />
          <Measurement
            value="6m"
            position="-left-12 top-0 bottom-75"
            orientation="vertical"
          />
          <Measurement
            value="4m + 1m"
            position="-left-20 top-75 bottom-0"
            orientation="vertical"
          />
        </div>

        {/* Middle Section - Hall and Kitchen */}
        <div className="w-52.5 h-full border-black border-r-2 relative">
          <div className="relative">
            <Room
              title="Hall"
              dimensions="3.5m × 7m = 24.5m²"
              bgColor="bg-yellow-50"
              className="w-full h-105 relative"
            />
            <Door position="bottom-[5px]" orientation="right" />
          </div>
          <div className="relative">
            <Room
              title="Kitchen"
              dimensions="3.5m × 4m = 14m²"
              bgColor="bg-purple-50"
              className="w-full h-60 relative"
            />
          </div>
          <Measurement value="3.5m" position="-top-8 left-0 right-0" />
        </div>

        {/* Right Section - Bathroom and Staircase */}
        <div className="flex flex-col w-45 h-full relative">
          {/* Bedroom Room */}
          <div className="relative">
            <Room
              title="Bed Room 2"
              dimensions="3m × 3.5m = 10.5m²"
              bgColor="bg-blue-50"
              className="w-full h-52.5 border-b-2 border-black"
            />
            <Door position="" orientation="left" />
            <Measurement
              value="3.5m"
              position="-right-12 top-0 bottom-0"
              orientation="vertical"
            />
          </div>
          {/* Bathroom Room */}
          <div className="relative">
            <Room
              title="Bathroom Room"
              dimensions="3m × 2.5m = 7.5m²"
              bgColor="bg-green-50"
              className="w-full h-37.5 border-b-2 border-black"
            />
            <Door position="" orientation="bottom" />
            <Measurement
              value="2.5m"
              position="-right-12 top-0 bottom-0"
              orientation="vertical"
            />
          </div>
          {/* Staircase and Corridor Area */}
          <div className="w-full relative flex">
            {/* Right Section - Corridor */}
            <div className="w-15 h-full relative flex">
              {/* Corridor Bottom */}
              <div className="w-15 h-full relative bg-orange-100">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold whitespace-nowrap">
                  Corridor - 1m × 6.5m
                </span>
              </div>
            </div>
            <div className="w-30 h-full relative border-0 flex flex-col">
              {/* Staircase Area */}
              <div className="w-30 h-45 relative border-t-2 border-black bg-gray-200">
                {/* Staircase */}
                <div className="absolute left-0 right-0 h-45 bg-gray-300 border-2 border-gray-600">
                  <div className="w-full h-full flex">
                    {/* First Flight */}
                    <div className="w-1/2 h-full border-r border-gray-600 relative">
                      <StairFlight variant="light" />
                    </div>

                    {/* Second Flight */}
                    <div className="w-1/2 h-full relative">
                      <StairFlight variant="dark" />
                    </div>
                  </div>

                  {/* Staircase Labels */}
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-gray-700 bg-white px-2 py-1 rounded border border-gray-600">
                    STAIRS
                  </span>
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-700 font-semibold whitespace-nowrap">
                    3m × 2m
                  </span>
                </div>

                <Measurement
                  value="4m"
                  position="-right-12 top-0 bottom-0"
                  orientation="vertical"
                />
              </div>

              {/* Space before staircase */}
              <div className="w-30 h-15">
                <Room
                  title=""
                  dimensions=""
                  bgColor="bg-orange-100"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Balcony Room */}
          <div className="relative">
            <Room
              title="Balcony"
              dimensions="3m × 1m = 3m²"
              bgColor="bg-blue-50"
              className="w-full h-15"
            />
            <Measurement
              value="1m"
              position="-right-12 top-0 bottom-0"
              orientation="vertical"
            />
          </div>

          <Measurement value="3m" position="-top-8 left-0 right-0" />
        </div>
      </div>
      {/* Description Section */}
      <div className="w-full flex-1 bg-white rounded-lg p-6">
        <p className="max-w-150 text-sm text-gray-700 leading-relaxed">
          <strong className="text-lg block mb-3">
            First Floor Layout Overview
          </strong>
          The first floor comprises a thoughtfully designed residential space
          divided into three distinct sections, offering comfortable living
          areas with a total area of approximately 98m².
          <br />
          <br />
          The left section features two private rooms connected by interior
          doors: a spacious Living Room measuring 21m² (3.5m × 6m) and a
          generous Bed Room of 17.5m² (3.5m × 4m + 1m). Both rooms provide ample
          space for comfortable living with doors opening to the central hall.
          <br />
          <br />
          The middle section is the heart of the home, housing a central Hall of
          24.5m² (3.5m × 7m) that connects all areas, and a Kitchen measuring
          14m² (3.5m × 4m). The hall serves as the main circulation space with
          doors providing access to adjacent rooms.
          <br />
          <br />
          The right wing features three distinct areas: Bed Room 2 at 10.5m² (3m
          × 3.5m), a Bathroom Room of 7.5m² (3m × 2.5m), and a small Balcony
          Room of 3m² (3m × 1m). A corridor running 1m × 6.5m provides
          circulation throughout this section.
          <br />
          <br />
          The centerpiece of the right wing is an elegant dual-flight staircase
          measuring 3m × 3m (total 4m height including landing space), featuring
          two flights with contrasting designs. This staircase provides
          efficient vertical circulation between floors while maintaining
          comfortable access to all levels of the home.
        </p>
      </div>
    </div>
  );
}

export default FirstFloor;
