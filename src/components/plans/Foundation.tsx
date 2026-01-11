import React from "react";

// Sub-components for better organization
const FoundationPillar = ({
  x,
  y,
  label,
}: {
  x: number;
  y: number;
  label: string;
}) => {
  // Convert 20cm to pixels (20cm = 0.2m, 1m = 60px, so 0.2m = 12px)
  const size = 12;

  return (
    <div
      className="absolute bg-gray-600  border-gray-900 flex items-center justify-center shadow-md"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <span className="text-[6px] text-white font-bold"></span>
    </div>
  );
};

const Measurement = ({
  value,
  position,
  orientation = "horizontal",
  style,
}: {
  value: string;
  position: string;
  orientation?: "horizontal" | "vertical";
  style?: React.CSSProperties;
}) => (
  <div
    className={`absolute ${position} flex items-center justify-center gap-2 ${
      orientation === "vertical" ? "flex-col" : "flex-row"
    }`}
    style={style}
  >
    {/* Left/Top Arrow */}
    <div
      className={`flex items-center ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      }`}
    >
      <div
        className={`${
          orientation === "vertical"
            ? "w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-600"
            : "w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-gray-600"
        }`}
      />
      <div
        className={`bg-gray-600 ${
          orientation === "vertical" ? "w-0.5 h-4" : "h-0.5 w-4"
        }`}
      />
    </div>

    {/* Measurement Text */}
    <div className="px-2 py-2 text-xs font-semibold whitespace-nowrap">
      {value}
    </div>

    {/* Right/Bottom Arrow */}
    <div
      className={`flex items-center ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      }`}
    >
      <div
        className={`bg-gray-600 ${
          orientation === "vertical" ? "w-0.5 h-4" : "h-0.5 w-4"
        }`}
      />
      <div
        className={`${
          orientation === "vertical"
            ? "w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-600"
            : "w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-gray-600"
        }`}
      />
    </div>
  </div>
);

const GridLine = ({
  type,
  position,
}: {
  type: "horizontal" | "vertical";
  position: number;
}) => {
  if (type === "horizontal") {
    return (
      <div
        className="absolute left-0 right-0 h-px bg-gray-300"
        style={{ top: `${position}px` }}
      />
    );
  }
  return (
    <div
      className="absolute top-0 bottom-0 w-px bg-gray-300"
      style={{ left: `${position}px` }}
    />
  );
};

function Foundation() {
  // Scale: 1m = 60px
  const scale = 60; // pixels per meter

  // Horizontal positions in meters: 0, 3.5, 7, 9.8 (last at 9.8m so pillar ends at 10m)
  const horizontalPositions = [0, 3.5, 7, 9.8];

  // Vertical positions in meters: 0, 3.5, 6, 9.8 (last at 9.8m so pillar ends at 10m)
  const verticalPositions = [0, 3.5, 6, 9.8];

  // Convert to pixels
  const horizontalPx = horizontalPositions.map((m) => m * scale);
  const verticalPx = verticalPositions.map((m) => m * scale);

  // Building dimensions
  const buildingWidth = 10 * scale; // 10m = 600px
  const buildingHeight = 10 * scale; // 10m = 600px

  // Generate foundation pillars
  const foundations: Array<{ x: number; y: number; label: string }> = [];
  let count = 1;

  for (let i = 0; i < verticalPositions.length; i++) {
    for (let j = 0; j < horizontalPositions.length; j++) {
      foundations.push({
        x: horizontalPx[j],
        y: verticalPx[i],
        label: `F${count}`,
      });
      count++;
    }
  }

  return (
    <div className="flex items-start gap-x-30">
      <div className="border-2 border-black">
        <div
          className="relative bg-gray-50 border-0 shadow-2xl"
          style={{
            width: `${buildingWidth}px`,
            height: `${buildingHeight}px`,
          }}
        >
          {/* Grid Lines - Horizontal (excluding first and last) */}
          {verticalPx.slice(1, -1).map((y, index) => (
            <GridLine key={`h-${index + 1}`} type="horizontal" position={y} />
          ))}

          {/* Grid Lines - Vertical (excluding first and last) */}
          {horizontalPx.slice(1, -1).map((x, index) => (
            <GridLine key={`v-${index + 1}`} type="vertical" position={x} />
          ))}

          {/* Foundation Pillars */}
          {foundations.map((foundation, index) => (
            <FoundationPillar
              key={index}
              x={foundation.x}
              y={foundation.y}
              label={foundation.label}
            />
          ))}

          {/* Measurements - Top (Horizontal) */}
          <Measurement
            value="3.5m"
            position="-top-8"
            style={{
              left: `${
                horizontalPx[0] + (horizontalPx[1] - horizontalPx[0]) / 2
              }px`,
              transform: "translateX(-50%)",
            }}
          />
          <Measurement
            value="3.5m"
            position="-top-8"
            style={{
              left: `${
                horizontalPx[1] + (horizontalPx[2] - horizontalPx[1]) / 2
              }px`,
              transform: "translateX(-50%)",
            }}
          />
          <Measurement
            value="3.0m"
            position="-top-8"
            style={{
              left: `${
                horizontalPx[2] + (horizontalPx[3] - horizontalPx[2]) / 2
              }px`,
              transform: "translateX(-50%)",
            }}
          />

          {/* Measurements - Left (Vertical) */}
          <Measurement
            value="3.5m"
            position="-left-14"
            orientation="vertical"
            style={{
              top: `${verticalPx[0] + (verticalPx[1] - verticalPx[0]) / 2}px`,
              transform: "translateY(-50%)",
            }}
          />
          <Measurement
            value="2.5m"
            position="-left-14"
            orientation="vertical"
            style={{
              top: `${verticalPx[1] + (verticalPx[2] - verticalPx[1]) / 2}px`,
              transform: "translateY(-50%)",
            }}
          />
          <Measurement
            value="4.0m"
            position="-left-14"
            orientation="vertical"
            style={{
              top: `${verticalPx[2] + (verticalPx[3] - verticalPx[2]) / 2}px`,
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>
      {/* Description Section */}
      <div className="w-full flex-1 bg-white rounded-lg p-6">
        <p className="max-w-150 text-sm text-gray-700 leading-relaxed">
          <strong className="text-lg block mb-3">
            Foundation Plan Overview
          </strong>
          This foundation plan represents a 10m x 10m building structure with a
          reinforced concrete pillar layout. The foundation system consists of
          16 strategically positioned concrete pillars (20cm x 20cm each),
          arranged in a 4x4 grid pattern to provide optimal structural support
          for the building.
          <br />
          <br />
          The horizontal spacing is divided into three sections: two equal spans
          of 3.5m each, followed by a final 3.0m section, totaling 10 meters in
          width. The vertical layout features three divisions: a 3.5m section at
          the front, a 2.5m middle section, and a 4.0m rear section, also
          totaling 10 meters in depth.
          <br />
          <br />
          Each pillar is precisely positioned at grid intersections to ensure
          even load distribution across the foundation. The pillars are labeled
          F1 through F16 for construction reference and are marked on the plan
          with gray squares. The grid lines indicate the center-to-center
          spacing between pillar rows and columns.
          <br />
          <br />
          This foundation design is suitable for a two-story residential
          building, providing adequate structural support for the ground floor
          and first floor. The layout accommodates the interior room divisions
          shown in the upper floors while maintaining structural integrity. The
          foundation must be constructed with reinforced concrete to a depth of
          at least 1.5m below ground level, with proper drainage systems
          installed around the perimeter.
          <br />
          <br />
          All measurements are displayed in meters, and the plan should be used
          in conjunction with soil testing reports and local building codes for
          final construction specifications.
        </p>
      </div>
    </div>
  );
}

export default Foundation;
