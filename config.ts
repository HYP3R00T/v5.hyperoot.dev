import type { SocialObjects } from "@/lib/types";

export const SITE = {
  website: "https://hyperoot.dev",
  author: "Rajesh",
  repo: "https://github.com/HYP3R00T/v4.hyperoot.dev",
  title: "Hyperoot",
  description:
    "A portfolio and blog showcasing Rajesh's skills in DevOps, Python, and Cloud.",
  image: "/og-image.jpg",
  imageAlt: "Check out hyperoot.dev",
  contentType: "Portfolio",
  twitterHandle: "@HYP3R00T",
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
}

export const Socials: SocialObjects[] = [
  {
    name: "mail",
    href: "mailto:rajesh@hyperoot.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "github",
    href: "https://github.com/HYP3R00T/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "facebook",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "instagram",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/rajesh-kumar-das/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "x",
    href: "https://x.com/HYP3R00T",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "twitch",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@hyperoot",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "discord",
    href: "https://discord.gg/tWZRBhaPhd",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "gitlab",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "reddit",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "telegram",
    href: "https://github.com/HYP3R00T/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "mastodon",
    href: "https://mastodon.social/@hyp3r00t",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
  {
    name: "rss",
    href: "/rss.xml",
    linkTitle: `${SITE.title} on RSS`,
    active: true,
  },
];