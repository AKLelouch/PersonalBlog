import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "lulu",
  subtitle: "哎呀被发现啦",
  lang: "ja",
  themeHue: 300,
  banner: {
    enable: true,
    src: "assets/images/IMG_5262.JPG",
    // src: "https://images.unsplash.com/photo-1714756126628-b55e40c4c129?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "GitHub",
      url: "https://github.com/AKLelouch",
      external: true,
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/universe-flow.jpg",
  name: "@CJT\u00A0\u00A0&\u00A0\u00A0@WTQ",
  bio: "一只IT金融小狗，Just two of us",
  links: [
    {
      name: "Twitter",
      icon: "fa6-brands:twitter",
      url: "https://twitter.com/AOI_Lelou",
    },
    {
      name: "Steam",
      icon: "fa6-brands:steam",
      url: "https://steamcommunity.com/profiles/76561198406526619/",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/AKLelouch",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
