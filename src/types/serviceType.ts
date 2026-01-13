export interface ServiceItemCard {
  title: string;
  subTitle: string;
  info: string;
  img: string;
}

export interface ServiceItemLabel {
  label: string;
  id: string;
  card: ServiceItemCard[];
}
