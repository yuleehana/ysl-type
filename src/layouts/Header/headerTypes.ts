export interface SubMenuItem {
  label: string;
  href: string;
}

export interface SubMenuColumn {
  title?: string;
  items: SubMenuItem[];
}

export interface MainMenu {
  id: string;
  label: string;
  columns: SubMenuColumn[];
}