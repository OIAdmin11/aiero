import type { MobileMenuItem } from "@/types/menu";

export const mobileMenuItems: MobileMenuItem[] = [
  {
    label: "Home",
    href: "#",
    children: [
      { label: "Modern Technology", href: "/index1" },
      { label: "Neural Networks", href: "/index2" },
      { label: "AI Agency", href: "/index3" },
      { label: "Chatbot", href: "/index4" },
      { label: "Startup", href: "/index5" },
      { label: "AI Consulting", href: "/index6" },
      { label: "Futurism", href: "/index7" },
      { label: "Hi-Tech", href: "/index8" },
      { label: "Voiceover", href: "/index9" },
      { label: "Science", href: "/index10" },
      { label: "Creative Bureau", href: "/index11" },
      { label: "Video Voiceover", href: "/index12" },
      { label: "IT Services", href: "/index13" },
      { label: "AI Devices", href: "/index14" },
      { label: "AI Solutions", href: "/index15" },
      { label: "Image Generator", href: "/index16" },
      { label: "Content Generator", href: "/index17" },
      { label: "Intro", href: "/index" },
    ],
  },
  {
    label: "pages",
    href: "#",
    children: [
      { label: "About us", href: "/about-us" },
      {
        label: "Team",
        href: "#",
        liClassName: "sub-menu",
        children: [
          { label: "Creative team", href: "/team" },
          { label: "Team Single", href: "/team-single" },
        ],
      },
      {
        label: "Projects",
        href: "#",
        liClassName: "sub-menu",
        children: [
          { label: "Projects Grid", href: "/project" },
          { label: "Projects Modern", href: "/project2" },
          { label: "Project Single", href: "/project-single" },
        ],
      },
      { label: "Gallery Grid", href: "/gallery-grid" },
      { label: "Gallery Masonry", href: "/gallery-masonry" },
      { label: "Pricing plans", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Typography", href: "/typography" },
      { label: "404", href: "/404" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Services Page", href: "/service" },
      { label: "Service Single", href: "/service-single" },
    ],
  },
  {
    label: "Shop",
    href: "#",
    children: [
      { label: "Products", href: "/shop" },
      { label: "Single Product", href: "/shop-single" },
      { label: "Shopping cart", href: "/cart" },
      { label: "Checkout", href: "/checkout" },
      { label: "My account", href: "/account" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    children: [
      { label: "Blog Classic", href: "/blog" },
      { label: "Blog Grid", href: "/blog2" },
      { label: "Blog Single", href: "/blog-single" },
    ],
  },
  {
    label: "Contacts",
    href: "/contact",
  },
];
