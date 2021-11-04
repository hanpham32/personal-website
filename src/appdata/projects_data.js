import imgPomodoro from "../assets/projects-img/pomodoro.png";
import imgBlogApp from "../assets/projects-img/blog-app.png";
import imgBasicCalc from "../assets/projects-img/basic-calc-js.png";
import imgHansWeb from "../assets/projects-img/hans-website.png";

export const items = [
  {
    src: imgHansWeb,
    alt: "hans-web-cover",
    desc: "A personal web portfolio built from scratch with React",
    tags: ["react"],
    demo: "",
    source: "https://github.com/hanpham32/personal-website",
    date: "Sep, 2021 - Present",
  },
  {
    src: imgPomodoro,
    alt: "pomodoro-web-cover",
    desc: "A pomodoro clock designed with a minimalistic approach. Timer starts at 25 minute, then switches to a 5 minute for break time.",
    tags: ["react"],
    demo: "https://hanpham32.github.io/pomodoro-react",
    source: "https://github.com/hanpham32/pomodoro-react",
    date: "Sep, 2021",
  },
  {
    src: imgBlogApp,
    alt: "blog-app-web-cover",
    // desc: "A Blog-app built with Django framework and deployed using Heroku. The website takes longer to load due to Heroku (the hosting service) puts the web app to sleep after an absent period of use. ",
    desc: "A blog website built with Django framework. Django is responsible for handling posts management. Used PostgreSQL to store data on Heroku server.",
    tags: ["django", "python"],
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
