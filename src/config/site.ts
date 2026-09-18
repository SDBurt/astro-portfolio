import type { Site, Metadata, Socials, Author, Nav } from "@/types";

export const SEPARATOR = "|";

export const SITE_TITLE = "Sean Burt";

/** Social card served for pages that do not pass their own (1200x630). */
export const OG_IMAGE = "/og.png";

export const SITE: Site = {
  NAME: "SDBurt",
  EMAIL: "seandburt@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_ABOUT: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const AUTHOR: Author = {
  NAME: "Sean Burt",
  JOB_TITLE: "Software Engineer",
  WORKS_FOR: "Consumer Genius",
  ALUMNI_OF: ["Vancouver Island University", "University of Victoria"],
  KNOWS_ABOUT: [
    "Software Engineering",
    "Machine Learning",
    "Data Engineering",
    "Web Development",
    "AI",
    "Data Science",
  ],
};

export const FEED: Metadata = {
  TITLE: SITE_TITLE,
  DESCRIPTION: "Writing and projects from Sean Burt.",
};

export const HOME: Metadata = {
  TITLE: "Software Engineer",
  DESCRIPTION: "Sean Burt - Software engineer who loves turning messy data into something useful.",
};

export const BLOG: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "Articles on software engineering and technology.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Background and experience.",
};

export const WORK: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "Professional work history.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Software projects and code repositories.",
};

export const NAV: Nav = [
  { LABEL: "home", HREF: "/" },
  { LABEL: "work", HREF: "/work" },
  { LABEL: "projects", HREF: "/projects" },
  { LABEL: "blog", HREF: "/blog" },
  { LABEL: "about", HREF: "/about" },
];

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://www.github.com/SDBurt"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/seandburt",
  }
];
