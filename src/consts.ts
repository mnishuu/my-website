import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Nishanth Gopal",
  DESCRIPTION: "Welcome to my space",
  AUTHOR: "Nishanth Gopak",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  }
  // { 
  //   TEXT: "Blog", 
  //   HREF: "/blog", 
  // },
  // { 
  //   TEXT: "Projects", 
  //   HREF: "/projects", 
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Nishnth Gopal",
    ICON: "email", 
    TEXT: "nishunishanth015@gmail.com",
    HREF: "mailto:nishunishanth015@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "https://github.com/mnishuu",
    HREF: "https://github.com/mnishuu"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "https://www.linkedin.com/in/nishanthgopal/",
    HREF: "https://www.linkedin.com/in/nishanthgopal/",
  }
]

