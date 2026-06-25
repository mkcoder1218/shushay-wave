export interface Step {
  id: number;
  title: string;
  description: string;
  details: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface NavLink {
  href: string;
  label: string;
}
