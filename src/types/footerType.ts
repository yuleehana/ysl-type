export interface FooterTitle {
  id: string;
  label: string;
  column: FooterColumn[];
}

export interface FooterColumn {
  label: string;
  href: string;
}
