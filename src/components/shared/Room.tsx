const Room = ({
  title,
  dimensions,
  bgColor,
  className = "",
  children,
}: {
  title: string;
  dimensions: string;
  bgColor: string;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div className={`relative ${bgColor} ${className}`}>
    <span className="absolute top-2 left-2 text-sm font-semibold">{title}</span>
    <span className="absolute top-8 left-2 text-xs text-gray-600">
      {dimensions}
    </span>
    {children}
  </div>
);
export default Room;
