
export type CardCategory = 'Spark' | 'Challenge' | 'Action' | 'Judge';

export interface CardData {
  id: string;
  category: CardCategory;
  text: string;
}

export interface CardTheme {
  primary: string;
  secondary: string;
  bg: string;
  accent: string;
  icon: string;
}
