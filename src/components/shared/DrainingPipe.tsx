import React from "react";

interface PipeProps {
  length: number;
  position?: string;
  className?: string;
}

const PrimaryVerticalPipe = ({
  length,
  position = "",
  className = "",
}: PipeProps) => {
  return (
    <div
      className={`absolute ${position} ${className} z-10`}
      style={{ width: "12px", height: `${length}px` }}
    >
      <div className="w-full h-full bg-gray-800 border-2 border-gray-900 relative">
        {/* Inner highlight to show depth */}
        <div className="absolute inset-0.5 bg-linear-to-r from-gray-700 via-gray-600 to-gray-700"></div>
      </div>
    </div>
  );
};

const SecondaryVerticalPipe = ({
  length,
  position = "",
  className = "",
}: PipeProps) => {
  return (
    <div
      className={`absolute ${position} ${className} z-10`}
      style={{ width: "8px", height: `${length}px` }}
    >
      <div className="w-full h-full bg-gray-600 border border-gray-700 relative">
        <div className="absolute inset-0.5 bg-linear-to-r from-gray-500 via-gray-400 to-gray-500"></div>
      </div>
    </div>
  );
};

const PrimaryHorizontalPipe = ({
  length,
  position = "",
  className = "",
}: PipeProps) => {
  return (
    <div
      className={`absolute ${position} ${className} z-10`}
      style={{ width: `${length}px`, height: "12px" }}
    >
      <div className="w-full h-full bg-gray-800 border-2 border-gray-900 relative">
        <div className="absolute inset-0.5 bg-linear-to-b from-gray-700 via-gray-600 to-gray-700"></div>
      </div>
    </div>
  );
};

const SecondaryHorizontalPipe = ({
  length,
  position = "",
  className = "",
}: PipeProps) => {
  return (
    <div
      className={`absolute ${position} ${className} z-10`}
      style={{ width: `${length}px`, height: "8px" }}
    >
      <div className="w-full h-full bg-gray-600 border border-gray-700 relative">
        <div className="absolute inset-0.5 bg-linear-to-b from-gray-500 via-gray-400 to-gray-500"></div>
      </div>
    </div>
  );
};

interface PipeJunctionProps {
  type: "primary" | "secondary";
  position?: string;
  className?: string;
}

const PipeJunction = ({
  type,
  position = "",
  className = "",
}: PipeJunctionProps) => {
  const size = type === "primary" ? "12px" : "8px";
  const bgColor = type === "primary" ? "bg-gray-800" : "bg-gray-600";
  const borderColor =
    type === "primary" ? "border-gray-900" : "border-gray-700";
  const borderWidth = type === "primary" ? "border-2" : "border";

  return (
    <div
      className={`absolute ${position} ${className} z-10 rounded-full ${bgColor} ${borderColor} ${borderWidth}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0.5 rounded-full bg-gradient-radial from-gray-500 to-gray-700"></div>
    </div>
  );
};

export {
  PipeJunction,
  PrimaryVerticalPipe,
  SecondaryVerticalPipe,
  PrimaryHorizontalPipe,
  SecondaryHorizontalPipe,
};
