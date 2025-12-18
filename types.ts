export type SubMenuType = 'UPW' | 'WWT';

export interface Site {
  id: string;
  name: string;
  subMenus: SubMenuType[];
  icon?: string;
}

export interface SelectedMenu {
  siteId: string;
  siteName: string;
  subMenu: SubMenuType;
}
