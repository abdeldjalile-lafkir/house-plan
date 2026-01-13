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
        className="absolute left-0 right-0 h-px bg-black"
        style={{ top: `${position}px` }}
      />
    );
  }
  return (
    <div
      className="absolute top-0 bottom-0 w-px bg-black"
      style={{ left: `${position}px` }}
    />
  );
};

export default GridLine;
