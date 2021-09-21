import imgPomodoro from "../assets/projects-img/pomodoro.png";
import imgBlogApp from "../assets/projects-img/blog-app.png";
import imgBasicCalc from "../assets/projects-img/basic-calc-js.png";
import imgHansWeb from "../assets/projects-img/hans-website.png";

export const items = [
  {
    src: imgHansWeb,
    alt: "hans-web-cover",
    desc: "A personal website built from scratch with React, serves as a portfolio. Unfortunately, it is not mobile-friendly yet :/",
    tags: ["react"],
    demo: "",
    source: "https://github.com/hanpham32/personal-website",
    date: "Sep, 2021 - Present",
  },
  {
    src: imgPomodoro,
    alt: "pomodoro-web-cover",
    desc: "A pomodoro clock that helps promote workflow and learning activities. Features include: switches background between sessions.",
    tags: ["react"],
    demo: "https://hanpham32.github.io/pomodoro-react",
    source: "https://github.com/hanpham32/pomodoro-react",
    date: "Sep, 2021",
  },
  {
    src: imgBlogApp,
    alt: "blog-app-web-cover",
    desc: "A Blog-app built with Django framework and deployed using Heroku. The website takes longer to load due to Heroku (the hosting service) puts the web app to sleep after an absent period of use. ",
    tags: ["django", "python", "postgresql"],
    demo: "https://hanwebblog.herokuapp.com/",
    source: "https://github.com/hanpham32/Blog-App",
    date: "Aug, 2021",
  },
  {
    src: imgBasicCalc,
    alt: "web-demo-img",
    desc: "A calculator built with vanilla HTML, CSS, and JS back in 2017. Has four fundamental functionalities: addition, subtraction, multiplication, and division.",
    tags: ["javascript"],
    demo: "https://hanpham32.github.io/basic-calculator-js/",
    source: "https://github.com/hanpham32/basic-calculator-js",
    date: "Summer, 2018",
  }
];
