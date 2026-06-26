export interface Step {
  id: number;
  title: string;
  description: string;
  details: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  image: string;
  alt: string;
  center: boolean;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}
