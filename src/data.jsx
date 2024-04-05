// Images
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
      "Recreated a promotional email for Uber using HTML and CSS, using the MJML framework.",
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
      "Recreated a transactional email for KitchenAid using HTML and CSS, built with HTML Tables.",
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
      "Recreated a promotional email for Capcom using HTML and CSS, using the MJML framework.",
  },
  {
    id: 4,
    tag: "Newsletter",
    title: "NYT Cooking Newsletter Email",
    tools: ["HTML", "&#x2022;", "CSS", "&#x2022;", "MJML"],
    demo: "https://johnlombardi389.github.io/nytcookingemail/",
    github: "https://github.com/johnlombardi389/nytcookingemail",
    image: Nytimescooking,
    description:
      "Recreated a newsletter email for The New York Times Cooking using HTML and CSS, using the MJML framework.",
  },
];

export default projectData;
