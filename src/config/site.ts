import type { Site, Metadata, Socials, Author } from "@/types";

export const SEPARATOR = "|";

export const SITE_TITLE = "Sean Burt";

export const SITE: Site = {
  NAME: "SDBurt",
  EMAIL: "seandburt@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const AUTHOR: Author = {
  NAME: "Sean Burt",
  ALUMNI_OF: ["Vancouver Island University", "University of Victoria"],
  KNOWS_ABOUT: ["Software Engineering", "Gaming", "Dogs"],
};

export const HOME: Metadata = {
  TITLE: "Software Engineer, Gamer, and Dog Dad",
  DESCRIPTION: "Personal website of Sean Burt. Software Engineer, Gamer, and Dog Dad.",
};

export const BLOG: Metadata = {
  TITLE: "Articles on Software Engineering, Gaming, and Dogs",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const ABOUT: Metadata = {
  TITLE: "More information about Sean Burt",
  DESCRIPTION: "More information about Sean Burt, a Software Engineer, Gamer, and Dog Dad.",
};

export const WORK: Metadata = {
  TITLE: "Professional Experience and Achievements",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects, Repositories, and Demos",
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
