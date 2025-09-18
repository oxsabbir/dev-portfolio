import React from "react";

type Color = "green" | "blue" | "yellow" | "red";

interface LinkButtonProps {
  url: string;
  text: string;
  color?: Color;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  url,
  text,
  color = "green",
}) => {
  const bgColorMap: Record<Color, string> = {
    green: "bg-green-500 text-black",
    blue: "bg-blue-500 text-white",
    yellow: "bg-yellow-500 text-black",
    red: "bg-red-500 text-white",
  };

  const bgColor = bgColorMap[color];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 rounded-md font-bold ${bgColor} hover:brightness-110 transition`}
    >
      {text}
    </a>
  );
};

export default LinkButton;
