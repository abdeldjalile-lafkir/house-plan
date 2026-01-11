const Door = ({
  position,
  orientation,
}: {
  position: string;
  orientation: "top" | "bottom" | "left" | "right";
}) => {
  const doorPanelStyles: Record<string, string> = {
    top: "top-0 left-[10px] w-[40px] h-[30px] rounded-b-lg",
    bottom: "bottom-0 left-[10px] w-[40px] h-[30px] rounded-t-lg border-b-0",
    left: "bottom-[5px] left-0 w-[35px] h-[40px] rounded-r-lg border-l-0",
    right: "bottom-[5px] right-0 w-[35px] h-[40px] rounded-l-lg border-r-0",
  };

  return (
    <div
      className={`absolute ${position} ${doorPanelStyles[orientation]} border-2 border-[#8b4513] bg-white`}
    ></div>
  );
};
export default Door;
