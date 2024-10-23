import temporaryPic from "../assets/img/my-logos/alien-logo.svg"
import portfolioIcon from "../assets/img/my-logos/folder-logo.svg"
import githubLogo from "../assets/img/Github.svg"
import figmaLogo from "../assets/img/figma_logo.svg"

import temporary2 from "../assets/img/Linkedin.svg"

// img: filepath
// color: string
// title: string
// description: string
// links: [{url, text}, {string, string}] 

const ProjectsData = [
    {
        image: temporaryPic,
        color: '',
        title: 'Project One',
        description: "This is a description about the project. For example, this website is something I've been building to display my portfolio.\
        So far it is entirely front end with zero data stuff and also I hate the way it looks and its ugly!! Lorem ipsum dolor sit \
        amet, consectetur adipiscing elit. Pellentesque eu justo vel sem volutpat hendrerit ac elementum est. Sed mattis euismod \
        erat, eget egestas erat convallis id. Nulla sem augue, cursus quis elit ut, luctus luctus diam. In hac habitasse platea \
        dictumst. Nam dapibus gravida tortor, id maximus libero. Cras convallis pretium mollis. Vestibulum turpis turpis, egestas \
        ac elementum quis, lobortis sit amet nibh. Cras auctor dui ut purus dapibus euismod. Praesent ornare urna vitae ipsum \
        porttitor euismod. Integer id ultrices mi, nec fermentum nibh.",
        links: [
            { url: 'https://Google.com', text: 'visit google', img: '' },
            { url: 'https://youtube.com', text: 'Visit youtube', img: '' },
        ],
    },
    {
        image: temporary2,
        color: '#FFECC8',
        title: 'Project Two',
        description: "This is a description about the project. For example, this website is something I've been building to display my portfolio.\
        So far it is entirely front end with zero data stuff and also I hate the way it looks and its ugly!! Lorem ipsum dolor sit \
        amet, consectetur adipiscing elit. Pellentesque eu justo vel sem volutpat hendrerit ac elementum est. Sed mattis euismod \
        erat, eget egestas erat convallis id. Nulla sem augue, cursus quis elit ut, luctus luctus diam. In hac habitasse platea \
        dictumst. Nam dapibus gravida tortor, id maximus libero. Cras convallis pretium mollis. Vestibulum turpis turpis, egestas \
        ac elementum quis, lobortis sit amet nibh. Cras auctor dui ut purus dapibus euismod. Praesent ornare urna vitae ipsum \
        porttitor euismod. Integer id ultrices mi, nec fermentum nibh. Lorem ipsum dolor sit \n\n \
        amet, consectetur adipiscing elit. Pellentesque eu justo vel sem volutpat hendrerit ac elementum est. Sed mattis euismod \
        erat, eget egestas erat convallis id. Nulla sem augue, cursus quis elit ut, luctus luctus diam. In hac habitasse platea \
        dictumst. Nam dapibus gravida tortor, id maximus libero. Cras convallis pretium mollis. Vestibulum turpis turpis, egestas \
        ac elementum quis, lobortis sit amet nibh. Cras auctor dui ut purus dapibus euismod. Praesent ornare urna vitae ipsum \
        porttitor euismod. Integer id ultrices mi, nec fermentum nibh.",
        links: [
            { url: 'https://github.com/project2', text: 'Visit the project repo', img: '' },
            { url: 'https://project2.com', text: 'Visit the project website', img: '' },
        ],
    },
    {
        image: portfolioIcon,
        color: '#FFD09B',
        title: 'Portfolio Website',
        description: "Welcome to the first iteration of my portfolio website, the website you're currently scrolling through! \
        It was designed on Figma, built using React-Bootstrap, and deployed with Vercel (? or something else idk yet). \
        It will constantly be changing. You might find new projects, animations, cool components, or design facelifts in the future. \
        Something I want to implement is a 'dark mode' type feature (you can find a rough build out in my figma docs below). \
        Thanks for stopping by :)",
        links: [
            { url: 'https://github.com/project2', text: 'Visit the project repo', img: githubLogo }
        ],
    },
    {
        image: temporaryPic,
        color: '#FFB0B0',
        title: 'Project Four',
        description: "This is a description about the project. For example, this website is something I've been building to display my portfolio.\
        So far it is entirely front end with zero data stuff and also I hate the way it looks and its ugly!! Lorem ipsum dolor sit \
        amet, consectetur adipiscing elit. Pellentesque eu justo vel sem volutpat hendrerit ac elementum est. Sed mattis euismod \
        erat, eget egestas erat convallis id. Nulla sem augue, cursus quis elit ut, luctus luctus diam. In hac habitasse platea \
        dictumst. Nam dapibus gravida tortor, id maximus libero. Cras convallis pretium mollis. Vestibulum turpis turpis, egestas \
        ac elementum quis, lobortis sit amet nibh. Cras auctor dui ut purus dapibus euismod. Praesent ornare urna vitae ipsum \
        porttitor euismod. Integer id ultrices mi, nec fermentum nibh.",
        links: [
            { url: 'https://Google.com', text: 'visit google', img: '' },
            { url: 'https://youtube.com', text: 'Visit youtube', img: '' },
        ],
    },
    {
        image: temporary2,
        color: '#B7E0FF',
        title: 'Project Five',
        description: "This is a description about the project. For example, this website is something I've been building to display my portfolio.\
        So far it is entirely front end with zero data stuff and also I hate the way it looks and its ugly!! Lorem ipsum dolor sit \
        amet, consectetur adipiscing elit. Pellentesque eu justo vel sem volutpat hendrerit ac elementum est. Sed mattis euismod \
        erat, eget egestas erat convallis id. Nulla sem augue, cursus quis elit ut, luctus luctus diam. In hac habitasse platea \
        dictumst. Nam dapibus gravida tortor, id maximus libero.\n\n Cras convallis pretium mollis. Vestibulum turpis turpis, egestas \
        ac elementum quis, lobortis sit amet nibh. Cras auctor dui ut purus dapibus euismod. Praesent ornare urna vitae ipsum \
        porttitor euismod. Integer id ultrices mi, nec fermentum nibh. Lorem ipsum dolor sit \
        amet, consectetur adipiscing elit. Pellentesque eu justo vel sem volutpat hendrerit ac elementum est. Sed mattis euismod \
        erat, eget egestas erat convallis id. Nulla sem augue, cursus quis elit ut, luctus luctus diam. In hac habitasse platea \
        dictumst. Nam dapibus gravida tortor, id maximus libero. Cras convallis pretium mollis. Vestibulum turpis turpis, egestas \
        ac elementum quis, lobortis sit amet nibh. Cras auctor dui ut purus dapibus euismod. Praesent ornare urna vitae ipsum \
        porttitor euismod. Integer id ultrices mi, nec fermentum nibh.",
        links: [
            { url: 'https://github.com/project2', text: 'Visit the project repo', img: '' },
            { url: 'https://project2.com', text: 'Visit the project website', img: '' },
        ],
    },
    {
        image: portfolioIcon,
        color: '',
        title: 'Portfolio Website - First Iteration',
        description: "This website serves as the initial version of my personal portfolio, showcasing my work and skills \
        in software development. It was roughly designed using Figma and built with React-Bootstrap to ensure a modern \
        and responsive layout. For deployment, I used Vercel, making the site easily accessible and scalable.\
        \n\nThe project is an ongoing work in progress, with frequent updates to reflect my latest projects, \
        add animations, and enhance user experience. Upcoming features include new interactive components and a \
        'dark mode' option, which you can preview in the Figma prototype linked below. Stay tuned for continuous improvements, \
        and thanks for visiting!",
        links: [
            { url: 'https://github.com/project2', text: 'Project repo', img: githubLogo },
            { url: 'https://www.figma.com/design/0DuJdgIkR8s2cv5Jtf9s5D/Untitled?node-id=4-383&t=l1lWvf5F65ZA2gqt-1', text: 'Figma designs', img: figmaLogo }

        ],
    }, 
      // Add more projects as needed
    
]

export default ProjectsData;