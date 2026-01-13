import React from "react";
import { FoundationPillar, GridLine, Measurement } from "@/components/shared";

function Foundation() {
  const scale = 60;

  const horizontalPositions = [0, 3.5, 7, 9.8];

  const verticalPositions = [0, 3.5, 6, 9.8];

  const horizontalPx = horizontalPositions.map((m) => m * scale);
  const verticalPx = verticalPositions.map((m) => m * scale);

  const buildingWidth = 10 * scale;
  const buildingHeight = 10 * scale;

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
    <div className="inline-flex flex-col md:flex-row items-start gap-30">
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
          <Measurement value="3.5m" position="-top-8 left-15" />
          <Measurement value="3.5m" position="-top-8 left-65" />
          <Measurement value="3.0m" position="-top-8 left-115" />

          {/* Measurements - Left (Vertical) */}
          <Measurement
            value="3.5m"
            position="-left-14 top-15"
            orientation="vertical"
          />
          <Measurement
            value="2.5m"
            position="-left-14 top-65"
            orientation="vertical"
          />
          <Measurement
            value="4.0m"
            position="-left-14 top-115"
            orientation="vertical"
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
