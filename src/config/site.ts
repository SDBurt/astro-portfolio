import type { Site, Metadata, Socials } from "@/types";

export const SITE: Site = {
  NAME: "SDBurt",
  EMAIL: "seandburt@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal website of Sean Burt. Software Engineer, Gamer, and Dog Dad.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://www.twitter.com/SeanBurt8",
  },
  { 
    NAME: "github",
    HREF: "https://www.github.com/SDBurt"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/seandburt",
  }
];