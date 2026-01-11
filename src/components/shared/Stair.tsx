const StairFlight = ({
  variant,
  stepCount = 11,
}: {
  variant: "light" | "dark";
  stepCount?: number;
}) => {
  const bgColor = variant === "light" ? "bg-gray-400" : "bg-gray-500";
  const steps = Array.from({ length: stepCount }, (_, i) => {
    const height = i === stepCount - 1 ? 30 : 15;
    const bottom = i * 15;
    return (
      <div
        key={i}
        className={`absolute left-0 right-0 h-[${height}px] ${bgColor} border-t border-gray-700`}
        style={{ bottom: `${bottom}px`, height: `${height}px` }}
      />
    );
  });
  return <>{steps}</>;
};
export default StairFlight;
