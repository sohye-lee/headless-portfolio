import { v4 as uuid } from "uuid";

export const mapMenuItems = (menuItems) => {
  return menuItems.map((item) => ({
    id: uuid(),
    link: item.menuItem.link?.uri,
    label: item.menuItem.label,
    submenuItems: (item.subItems || []).map((subItem) => ({
      id: uuid(),
      link: subItem.link?.uri,
      label: subItem.label,
    })),
  }));
};
