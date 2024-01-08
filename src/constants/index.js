import css from "../assests/css.png";
import html from "../assests/html.png";
import java from "../assests/java.png";
import javascript from "../assests/javascript.png";
import python from "../assests/python.png";
import project1 from "../assests/project1.jpg";
import project2 from "../assests/project2.jpg";
import project3 from "../assests/project3.png";
import react from "../assests/react.png"
import spring from "../assests/spring.png"
import git from '../assests/git.png'
import cpp from '../assests/cpp.png'
import django from '../assests/django.png'
import react1 from '../assests/react1.png'
import web from '../assests/web.jpg'


const services=[
    {
        title:"Web Developer",
        icon:web,
    },
    {
        title:"React Developer",
        icon:react,
    },
    {
        title:"Java Developer",
        icon:java,
    }

];

const technologies=[
    {
        name:"HTML",
        icon:html,
    },
    {
        name:"CSS",
        icon:css,
    },
    {
        name:"Javascript",
        icon:javascript,
    },
    {
        name:"React",
        icon:react1,
    },
    {
        name:"Java",
        icon:java,
    },
    {
        name:"Spring",
        icon:spring,
    },
    {
        name:"Python",
        icon:python,
    },
    {
        name:"Django",
        icon:django,
    },
    {
        name:"C/C++",
        icon:cpp,
    },
    {
        name:"GitHub",
        icon:git,
    },
    
];

const project=[
    {
        name:"Web Page Builder",
        decription:"Developed a Python/Django web application enabling users to create customized web pages.",
        tags:[
            {
                name:"Javascript",
                color:"blue-text-gradient"
            },
            {
                name:"HTML",
                color:"blue-text-gradient"
            },
            {
                name:"Bootstrap",
                color:"blue-text-gradient"
            },
        ],
        image:project1

    },
    {
        name:"Bank Management System",
        decription:"Independently designed and developed a Java-based web application for a comprehensive banking system.",
        tags:[
            {
                name:"Javascript",
                color:"blue-text-gradient"
            },
            {
                name:"HTML",
                color:"blue-text-gradient"
            },
            {
                name:"Bootstrap",
                color:"blue-text-gradient"
            },
        ],
        image:project2

    },
    {
        name:"Personal Portfolio",
        decription:"Developed responsive personal portfolio using React Js.",
        tags:[
            {
                name:"Javascript",
                color:"blue-text-gradient"
            },
            {
                name:"HTML",
                color:"blue-text-gradient"
            },
            {
                name:"Bootstrap",
                color:"blue-text-gradient"
            },
        ],
        image:project3

    }

];

export{services,technologies,project};