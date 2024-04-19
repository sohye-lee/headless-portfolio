export const getTextAlign = (textAlign = "left") => {
  const textAligns = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  return `${textAligns[textAlign] || ""}`;
};

export const getHeadingFontSize = (level = 3) => {
  const fontSizes = {
    1: "text-7xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };

  return `${fontSizes[level] || ""}`;
};

export const getCusstomFontSize = (pixel) => {
  return `text-[${pixel}]`;
};

export const getCustomTextColor = (color) => {
  return `text-[${color}]`;
};
