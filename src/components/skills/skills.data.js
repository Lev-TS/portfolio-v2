import frontendIcon from "./icons/frontend.svg";
import testingIcon from "./icons/testing.svg";
import designIcon from "./icons/design.svg";
import backendIcon from "./icons/backend.svg";
import miscIcon from "./icons/misc.svg";

export default [
  {
    type: "FRONTEND",
    icon: frontendIcon,
    skillset: [
      "JavaScript ES6",
      "HTML5 & CSS3",
      "SASS (SCSS)",
      "CSS-in-JS (Styled-Components)",
      "React",
      "React Hooks",
      "Context API",
      "Redux",
      "Gatsby & GraphQL",
      "Progressive Web Apps",
    ],
  },
  {
    type: "TESTING",
    icon: testingIcon,
    skillset: ["Jest", "Mocha", "Chai"],
  },
  {
    type: "DESIGN",
    icon: designIcon,
    skillset: ["Responsive design", "Figma"],
  },
  {
    type: "BACKEND",
    icon: backendIcon,
    skillset: [
      "Node.js",
      "Express",
      "RESTful API",
      "SQL (PostgreSQL, MySQL, SQLite)",
      "Authentication & Authorization",
    ],
  },
  {
    type: "MISC",
    icon: miscIcon,
    skillset: [
      "Docker",
      "Heroku",
      "Netlify",
      "DigitalOceans",
      "SSH",
      "SSL",
      "Git & GitHub",
      "Shell (bash, zsh)",
      "npm & yarn",
      "Payment Processing (Stripe)",
      "Firebase (Firestore, Auth)",
      "Trabspilation (webpack, babel)",
    ],
  },
];
