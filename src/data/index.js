export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Blogs", link: "#blogs" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: " md:col-span-2 md:row-span-2 h-screen",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Shikshyalaya:School Management System",
    des: "A comprehensive school management system that helps administrators, teachers, and students manage academic activities, assignmets, and grades.",
    img: "/sikshyalaya.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/mongoDB.svg",
      "/node.svg",
      "/express.svg",
    ],
    link: "https://github.com/kaylinkhanal/sikshyalaya/tree/sanjokale",
  },
  {
    id: 2,
    title: "Snapgram-Social Media App",
    des: "A backend implementation of core YouTube features including user authentication, video uploads, comments, and likes using Express.js.",
    img: "/SnapGram.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/mongoDB.svg",
      "/express.svg",
      "/node.svg",
    ],
    link: "https://github.com/Sanjokale/snapgram",
  },
  {
    id: 3,
    title: "youtube-backend",
    des: "A backend implementation of core YouTube features including user authentication, video uploads, comments, subscribes and likes using Express.js.",
    img: "/youtube.webp",
    iconLists: ["/node.svg", "/express.svg", "/mongoDB.svg", "/javascript.svg"],
    link: "https://github.com/Sanjokale/backend",
  },
];

export const recentBlogs = [
  {
    id: 1,
    title: "Redux toolkit setup with Next.js",
    des: " Learn how to set up Redux Toolkit with Next.js to manage global state in your React applications.",
    image: "/reduxNext.jpg",
    url: "https://dev.to/sanjokale/minimal-way-to-setup-redux-toolkit-4pg",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "JWT authentication with Node.js and Express.js",
    des: " Learn how to set up JWT authentication with Node.js and Express.js to secure your RESTful APIs.",
    image: "/jwt_05.jpg",
    url: "https://dev.to/sanjokale/jwt-authentication-in-expressjs-using-cookies-27gi",
    readTime: "12 min read",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Sanjokale",
  },

  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sanjok-alemagar-8a64811b9/",
  },
];
