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

export const getHeadingFontSizeByString = (fontSize = "large") => {
  const fontSizes = {
    "xx-large": "text-7xl",
    "x-large": "text-5xl",
    large: "text-4xl",
    medium: "text-3xl",
    small: "text-2xl",
  };

  return `${fontSizes[fontSize] || ""}`;
};

export const getParagraphFontSizeByString = (fontSize = "medium") => {
  const fontSizes = {
    "xx-large": "text-2xl",
    "x-large": "text-xl",
    large: "text-lg",
    medium: "text-md",
    small: "text-sm",
  };

  return `${fontSizes[fontSize] || ""}`;
};

export const getCustomFontSize = (pixel) => {
  return `text-[${pixel}]`;
};

export const getCustomTextColor = (color) => {
  return `text-[${color}]`;
};
