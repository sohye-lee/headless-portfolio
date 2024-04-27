export const getColumnsColor = (backgroundColor) => {
  return `bg-${backgroundColor}`;
};

export const getPadding = (style) => {
  return `pb-[${style?.spacing?.padding?.bottom?.split("|")[2]}px] pt-[${
    style?.spacing?.padding?.top?.split("|")[2]
  }px] pl-[${style?.spacing?.padding?.left?.split("|")[2]}px] pr-[${
    style?.spacing?.padding?.right?.split("|")[2]
  }px]`;
};
