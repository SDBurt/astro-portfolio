export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_ABOUT: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type Nav = {
  LABEL: string;
  HREF: string;
}[];

export type Author = {
  NAME: string;
  JOB_TITLE: string;
  WORKS_FOR: string;
  ALUMNI_OF: string[];
  KNOWS_ABOUT: string[];
};