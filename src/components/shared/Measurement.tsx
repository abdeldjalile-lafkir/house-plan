const Measurement = ({
  value,
  position,
  orientation = "horizontal",
}: {
  value: string;
  position: string;
  orientation?: "horizontal" | "vertical";
}) => (
  <div
    className={`absolute ${position} flex items-center justify-center gap-2 ${
      orientation === "vertical" ? "flex-col" : "flex-row"
    }`}
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
    <div className=" px-2 py-2 text-xs font-semibold whitespace-nowrap">
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
export default Measurement;
