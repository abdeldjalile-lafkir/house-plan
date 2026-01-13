const FoundationPillar = ({
  x,
  y,
  label,
}: {
  x: number;
  y: number;
  label: string;
}) => {
  const size = 12;

  return (
    <div
      className="absolute bg-black border-2 border-black flex items-center justify-center shadow-md"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <span className="text-[6px] text-black font-bold"></span>
    </div>
  );
};

export default FoundationPillar;
