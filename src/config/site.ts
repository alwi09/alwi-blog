export const siteConfig = {
  name: "AlwiBlog",
  url: process.env.NEXT_APP_URL,
  description:
    "Welcome to my blog. Thanks for coming by. Build using tailwindCSS, velite, shadcn UI and Nextjs 14. 📄",
  author: "Alwi Irfani",
  links: {
    whatsapp: process.env.NEXT_LINK_WHATSAPP,
    facebook: process.env.NEXT_LINK_FB,
    instagram: process.env.NEXT_LINK_IG,
    github: process.env.NEXT_LINK_GITHUB,
    linkedin: process.env.NEXT_LINK_LINKEDIN,
  },
};

export type SiteConfig = typeof siteConfig;
