import type { Step, NavLink, FeatureCard } from "@/types";

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    id: 1,
    title: "Download the App",
    description: "Get the Wave Equb app and create your account in minutes.",
    details: "Quick setup and secure access.",
  },
  {
    id: 2,
    title: "Join or Create an Equb",
    description: "Start your own group or join an existing one.",
    details: "Set contribution amounts and schedules.",
  },
  {
    id: 3,
    title: "Make Contributions",
    description: "Pay your share securely through the app.",
    details: "Get reminders so you never miss a payment.",
  },
  {
    id: 4,
    title: "Track & Get Paid",
    description: "Monitor progress in real-time and receive your payout.",
    details: "through a fair system.",
  },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "Secure Cashless Equb Transactions",
    description: "Send and receive Equb payments safely—no cash, no risk.",
    image: "/imgs/phone 1.png",
    alt: "Payment screen",
    center: false,
  },
  {
    title: "Easy Equb Creation & Management",
    description:
      "Create or join Equb groups and manage everything in one place.",
    image: "/imgs/phone 1.png",
    alt: "Equb creation screen",
    center: true,
  },
  {
    title: "Smart Automated Contributions",
    description:
      "Stay on track with scheduled payments and instant reminders.",
    image: "/imgs/phone-3.png",
    alt: "Account screen",
    center: false,
  },
];

export const NAV_LINKS: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];
