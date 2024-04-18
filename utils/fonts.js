export const getTextAlign = (textAlign = "left") => {
  const textAligns = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  return `${textAligns[textAlign] || ""}`;
};

export const getFontSize = (level = 3) => {
  const fontSizes = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };

  return `${fontSizes[level] || ""}`;
};
