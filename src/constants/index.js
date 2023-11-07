import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  // css,
  flutter,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  fanhub,
  threejs,
  cpp_logo,
  python,
  sabanci,
  logo,
  kkb,
  rotaract,
  gram,
  cop,
  game,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Game Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "AI Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp_logo,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
];

const experiences = [
  {
    title: "LEARNING ASSISTANT / MOBILE APPLICATION DEVELOPMENT",
    company_name: "Sabanci University",
    icon: sabanci,
    iconBg: "#E6DEDD",
    date: "02.2022 - 07.2022",
    points: [
      "Teaching and helping students at CS310(Mobile Application Development) course.",
      "Reading and grading the programs, homework, and exam questions of students. Programs in that course are based on developing all kinds of both front-end and back-end solutions which are required to develop an multi-platform application(web, android, and ios).",
      "Conducting 4 hours of office hours every week.",
    ],
  },
  {
    title: "MOBILE APP DEVELOPER / FOUNDER",
    company_name: "GRAMILOGY",
    icon: logo,
    // E6DEDD
    iconBg: "#383E56",
    date: "12.2022 - present",
    points: [
      "Built end-to-end mobile application called Gramilogy, for both IOS and Android marketplaces.",
      "Managed and maintained smooth flow of UI-UX.",
      "Implementing responsive design and ensuring cross-browser compatibilSophisticated backend using more than one frameworks like node.js, flask.ity.",
      "Efficient fetch techniques without facing limits, requires parallel computing and distribution.",
      "Responsive and animated modern UI implemented using Flutter, Bloc.",
      "MongoDB Atlas and AWS S3 used for data containers.",
      "Available on App Store and Google Play Store. App name is Gramilogy: Secure Unfollowers",

    ],
  },
  {
    title: "GAME DEVELOPER / FOUNDER",
    company_name: "COLOR SMASH",
    icon: logo,
    iconBg: "#383E56",
    date: "02.2023 - present",
    points: [
      "Built a game called Color Smash, initially called SetToZero.",
      "C# and Unity used.",
      "Implemented the gameplay in a very efficient manner.",
      "Object-Oriented design has been used.",
      "Node.js backend for top players dashboard.",
      "AWS S3 used for levels and data containers.",
    ],
  },
  {
    title: "ARTIFICIAL INTELLIGENCE INTERN / TEST AUTOMATION TEAM",
    company_name: "Turkish Credit Bureau (KKB) - Findeks",
    icon: kkb,
    iconBg: "#E6DEDD",
    date: "08.2021 - 01.2022",
    points: [
      "Developed AI-based testing software that utilizes OCR technology (Tesseract Engine) to identify elements in images and pinpoint their locations. Enhanced functionality to locate specific search expressions within the image.",
      "Eliminated dependency on XML (XPath, etc.) or HTML tags for test execution. Addressed the issue of changing element properties due to alterations in the web page's structure, such as the insertion of new parent tags.",
      "Introduced a module that identifies element locations, enabling tests to run based on click locations. Reduced the incidence of failed test cases, contributing to operational efficiency.",
      'Developed machine learning module to predict elements targeted by analysts, enhancing test case accuracy. For instance, resolved discrepancies between test case instructions like "Click on the element with the title of (Login)" and actual webpage elements such as a button labeled "Enter."',
      "Introduced this module to minimize inaccurately failed test cases, thereby improving the overall testing process.",
    ],
  },
  {
    title: "MACHINE LEARNING RESEARCHER / DOMAIN ADAPTATION IN OBJECT DETECTION(ENS-491/2)",
    company_name: "Sabanci University",
    icon: sabanci,
    iconBg: "#E6DEDD",
    date: "09.2022 - 07.2023",
    points: [
      'Implemented "Domain Adaptation for Object Detection" project to address domain shift issues in object detection using domain adaptation techniques, traditionally applied in image classification.',
      "Focused on enhancing model performance across diverse domains such as autonomous driving, robotics, and medical imaging. Addressed challenges like a vehicle's inability to recognize adverse weather conditions or a robot's operational difficulties in uncontrolled settings.",
      "Established lower and upper performance bounds by testing the target domain with a source-trained model and fine-tuning it for the target domain. Measured model effectiveness using Average Precision (AP) score, aiming to align the AP score closely with the upper bound.",
      "Achieved compelling mAP results, closely aligning with the predetermined upper performance bound.",
    ],
  },
  {
    title: "RESEARCH ASSISTANT / ML AND COMPUTER VISION AIDED SOFTWARE TESTING",
    company_name: "Sabanci University",
    icon: sabanci,
    iconBg: "#E6DEDD",
    date: "10.2021 - 01.2022",
    points: [
      "Conducted comprehensive end-to-end (E2E) testing to validate software products from start to finish. Aimed to replicate real user scenarios to assess both the system under test and its individual components. Addressed the inherent fragility of E2E tests, which necessitate frequent updates due to changes in application interfaces.",
      "Developed a learning-based approach within AI/ML-aided testing systems to adapt to interface changes. Updated test cases to ensure the system under test performs as designed, thereby achieving more efficient and less resource-dependent test automation.",
      "Implemented two distinct computer vision algorithms to locate all UI components on the screen in real-time. Generated retrievable objects, capturing UI components and their properties, for example, in JSON format.",
      "Developed a testing module to evaluate the accuracy of computer vision algorithms in use. Conducted comparisons between objects retrieved by the algorithms and actual elements at those locations, typically verified through DOM parsing. Outputted a truth value, often represented as a percentage, to quantify algorithmic accuracy.",
    ],
  },
  {
    title: "Head of Awareness Committee / Volunteer",
    company_name: "Rotaract",
    icon: rotaract,
    iconBg: "#fff",
    date: "02.2023 - present",
    points: [
      "Head of awareness committee of Dolmabahce Rotaract Club, which has the best project title in the world.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gramilogy: Secure Unfollowers",
    description:
      "Unlike any other social media analytics app, Gramilogy does not ask for your account credentials! Passwordless, secure operations. Find out who your unfollowers are without giving your password anymore! Gramilogy proves its security assertion by not taking the password of your self-account to operate.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Bloc",
        color: "pink-text-gradient",
      },
    ],
    image: gram,
    source_code_link: "https://apps.apple.com/tr/app/gramilogy-secure-unfollowers/id6467876407",
  },
  {
    name: "Color Smash",
    description:
      "Color Smash is a unity, hyper-casual game. Implemented strong leveling algorithm that would go forever. Implemented efficient level container algorithm. Further, implemented seemlesly efficient calculations to ensure smooth flow of game and end game logic. Implemented and integrated 5 different ad type for replay/continue function of the game. Will be available on all platforms in 1 month...",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "white-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
    ],
    image: game,
    source_code_link: "",
  },
  {
    name: "FanHub - Turkish Football Federation",
    description:
      "FANHUB is a web application created for football fans and TFF teams. This application is a medium where the teams can share their campaigns for users to view in their feeds in order for teams to gain more fans and raise more awareness.The main goal of FANHUB is for teams to build a community within the fanbase. Hence, there will be forums for each team where the supporters can interact.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "Bloc",
        color: "pink-text-gradient",
      },
    ],
    image: fanhub,
    source_code_link: "https://github.com/burakkarakoc/fanhub_tff",
  },
  {
    name: "boLang",
    description:
    "In this project, a java-like programming language developed. The programming language boLang only accepts int, string, and boolean types of variables currently, however, since the structure of the development is conducted in an object-oriented fashion, new types can easily be added. \n"+
    "Worksheets can either contain:\n"+
    "1- Variable declarations (with duplicate checks),\n"+
    "2- Variables have also scopes - i.e. the one defined outside the scope, is not reachable outside,\n"+
    "3- Expressions including arithmetic, comparison, equality,\n"+
    "4- All expressions have appropriate type checks and priorities,\n"+
    "5- Control flow (i.e. if-else, for-loop, while-loop),\n"+
    "6- Tests (able to combined and used in sinsle node - worksheet)\n"+
    "7- Also, spaces and end-lines supported.\n",
    tags: [
      {
        name: "MPS by Jetbrains",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "OOP",
        color: "white-text-gradient",
      },
    ],
    image: cop,
    source_code_link: "https://github.com/burakkarakoc/cop_tudarmstadt_project/tree/master",
  },
  

  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
