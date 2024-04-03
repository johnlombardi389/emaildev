// Images
import ProjectOne from "./assets/project1.jpeg";
import Nytimescooking from "./assets/nytimescooking.png";
import Kitchenaid from "./assets/kitchenaid.png";
import Capcom from "./assets/capcom.png";
import Uber from "./assets/uber.png";

const projectData = () => [
  {
    id: 1,
    tag: "Promotional",
    title: "Uber Promotional Email",
    tools: ["HTML", "&#x2022;", "CSS", "&#x2022;", "MJML"],
    demo: "https://johnlombardi389.github.io/uberemail/",
    github: "https://github.com/johnlombardi389/uberemail",
    image: Uber,
    description:
      "Hello this is the fourth project where I made a promotional email for Uber.",
  },
  {
    id: 2,
    tag: "Transactional",
    title: "Kitchen Aid Receipt Email",
    tools: ["HTML", "&#x2022;", "CSS"],
    demo: "https://johnlombardi389.github.io/kitchenaidemail/",
    github: "https://github.com/johnlombardi389/kitchenaidemail",
    image: Kitchenaid,
    description:
      "Hello this is the second project where I made a transaction email for Kitchen Aid order.",
  },
  {
    id: 3,
    tag: "Promotional",
    title: "Capcom Promotional Email",
    tools: ["HTML", "&#x2022;", "CSS", "&#x2022;", "MJML"],
    demo: "https://johnlombardi389.github.io/capcomemail/",
    github: "https://github.com/johnlombardi389/capcomemail",
    image: Capcom,
    description:
      "Hello this is the third project where I made a promotional email for Capcom.",
  },
  {
    id: 4,
    tag: "Newsletter",
    title: "NYT Cooking Newsletter",
    tools: ["HTML", "&#x2022;", "CSS", "&#x2022;", "MJML"],
    demo: "https://johnlombardi389.github.io/nytcookingemail/",
    github: "https://github.com/johnlombardi389/nytcookingemail",
    image: Nytimescooking,
    description:
      "Hello this is the first project where I created an html email for cooking.",
  },
];

export default projectData;
