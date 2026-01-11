import React from "react";
import { Room, Door, Measurement, StairFlight } from "@/components/shared";

function GroundFloor() {
  return (
    <div className="flex gap-x-30">
      <div className="w-150 h-151 border-black border-2 relative bg-white shadow-2xl">
        {/* Top Section - Main Room */}
        <div className="w-full h-52.5 border-black border-b-2 relative">
          <Room
            title="Main Room"
            dimensions="10m × 3.5m = 35m²"
            bgColor="bg-blue-50"
            className="w-full h-full"
          />
          <Measurement value="10.0m" position="-top-8 left-0 right-0" />
          <Measurement
            value="3.5m"
            position="-left-12 top-0 bottom-0"
            orientation="vertical"
          />
        </div>

        {/* Bottom Section - Garages and Right Wing */}
        <div className="w-full h-97.5 flex relative">
          {/* Garage 1 */}
          <Room
            title="Garage - 1"
            dimensions="3.5m × 6.5m = 22.75m²"
            bgColor="bg-green-50"
            className="w-52.5 h-full border-r-2 border-black"
          >
            <Door position="" orientation="right" />
            <Measurement value="3.5m" position="-bottom-8 left-0 right-0" />
          </Room>

          {/* Garage 2 */}
          <Room
            title="Garage - 2"
            dimensions="3.5m × 6.5m = 22.75m²"
            bgColor="bg-yellow-50"
            className="w-52.5 h-full border-r-2 border-black"
          >
            <Door position="" orientation="right" />
            <Measurement value="3.5m" position="-bottom-8 left-0 right-0" />
          </Room>

          {/* Right Wing - Bathroom, Stairs, and Corridor */}
          <div className="w-45 h-full relative flex">
            {/* Left Section - Bathroom and Stairs  */}
            <div className="w-30 h-full relative border-0 flex flex-col">
              {/* Bathroom */}
              <div className="w-30 h-37.5 relative bg-purple-50 border-b-2 border-black">
                <Room
                  title="Bathroom"
                  dimensions="2m × 2.5m"
                  bgColor="bg-transparent"
                  className="w-full h-full"
                />
                <Door position="" orientation="right" />
              </div>

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
              </div>

              {/* Space before staircase */}
              <div className="w-30 h-15">
                <Door position="" orientation="right" />
              </div>

              <Measurement
                value="2.5m"
                position="-right-12 top-0 bottom-0"
                orientation="vertical"
              />
            </div>

            {/* Right Section - Corridor */}
            <div className="w-15 h-full relative flex">
              {/* Corridor Bottom */}
              <div className="w-15 h-full border-l-2 border-black relative bg-orange-100">
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 text-xs font-semibold whitespace-nowrap">
                  Corridor - 1m × 6.5m
                </span>
                <Door position="" orientation="bottom" />
              </div>
            </div>

            <Measurement value="3.0m" position="-bottom-8 left-0 right-0" />
          </div>

          <Measurement
            value="6.5m"
            position="-left-12 top-0 bottom-0"
            orientation="vertical"
          />
        </div>
      </div>
      {/* Description Section */}
      <div className="w-full flex-1 bg-white rounded-lg p-6">
        <p className="max-w-150 text-sm text-gray-700 leading-relaxed">
          <strong className="text-lg block mb-3">
            Ground Floor Layout Overview
          </strong>
          The ground floor features a spacious 35m² main room (10m × 3.5m) that
          spans the entire width of the building, providing an open and
          versatile living space ideal for entertaining or family gatherings.
          <br />
          <br />
          Adjacent to the main room are two generously sized garages, each
          measuring 22.75m² (3.5m × 6.5m), offering ample space for vehicle
          parking and additional storage needs. These garages provide direct
          access and convenience for homeowners.
          <br />
          <br />
          The right wing houses essential functional spaces including a
          well-appointed 5m² bathroom (2m × 2.5m) strategically positioned for
          easy access. A thoughtfully designed corridor (1m wide) connects the
          various spaces, ensuring smooth circulation throughout the floor.
          <br />
          <br />
          The centerpiece of this wing is an elegant staircase (3m × 2m)
          featuring a dual-flight design that connects to the upper levels. The
          staircase is designed with 11 steps per flight, providing comfortable
          ascent while maximizing space efficiency.
          <br />
          <br />
          This floor plan efficiently combines residential and utility spaces,
          with a total area of approximately 90m², offering both functionality
          and comfort for modern living.
        </p>
      </div>
    </div>
  );
}

export default GroundFloor;
