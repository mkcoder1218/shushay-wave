import type { NavLink } from "@/types";

export const FOOTER_MENU_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

export const FOOTER_SOCIAL_LINKS = [
  "Telegram",
  "Instagram",
  "TikTok",
  "Facebook",
] as const;
