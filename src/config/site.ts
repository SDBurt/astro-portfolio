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
  TITLE: "Software Engineer",
  DESCRIPTION: "Sean Burt - Software engineer specializing in web development and machine learning.",
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
