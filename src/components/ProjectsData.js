import temporaryPic from "../assets/img/my-logos/alien-logo.svg"
import deepLearningLogo from "../assets/img/deepLearningLogo.png"
import portfolioIcon from "../assets/img/my-logos/folder-logo.svg"
import githubLogo from "../assets/img/Github.svg"
import figmaLogo from "../assets/img/figma_logo.svg"
import hafathahLogo from "../assets/img/hafathahLogo.svg"
import robotDrawling from "../assets/img/robotDrawling.svg"
import robotColor from "../assets/img/robotColor.svg"

import temporary2 from "../assets/img/Linkedin.svg"

// img: filepath
// color: string
// title: string
// description: string
// links: [{url, text}, {string, string}] 

const ProjectsData = [
    {
        image: robotColor,
        color: '#FFF7D1',
        title: 'DookieBot',
        description: "TODO -- build bot\n\n TODO -- add description. \n\n\
        In my free time since graduation, I’ve been learning new \
        technology and working on various projects. I built an AI chatbot using the “Prompt Engineering for Developers” course \
        from deeplearning.ai. Its a chat bot. completed deeplearning.ai 'Prompt Engineering for \
        Developers'. A course where I learn how to use a large language model (LLM) to quickly build new and powerful applications. \
        Using the OpenAI API, you’ll be able to quickly build capabilities that learn to innovate and create value in ways that were \
        cost-prohibitive, highly technical, or simply impossible before now.\
        \n\nSo far it is entirely front end with zero data stuff and also I hate the way it looks and its ugly!! Lorem ipsum dolor sit \
        amet, consectetur adipiscing elit. Pellentesque eu justo vel sem volutpat hendrerit ac elementum est. Sed mattis euismod \
        erat, eget egestas erat convallis id. Nulla sem augue, cursus quis elit ut, luctus luctus diam. In hac habitasse platea \
        dictumst. Nam dapibus gravida tortor, id maximus libero. Cras convallis pretium mollis. Vestibulum turpis turpis, egestas \
        ac elementum quis, lobortis sit amet nibh. Cras auctor dui ut purus dapibus euismod. Praesent ornare urna vitae ipsum \
        porttitor euismod. Integer id ultrices mi, nec fermentum nibh.",
        links: [
            { url: 'https://Google.com', text: 'Try it out', img: robotDrawling },
            { url: 'https://Google.com', text: 'Project Repo', img: githubLogo },
            {
                url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', 
                text: 'Course: ChatGPT Prompt Engineering for Developers', img: deepLearningLogo 
            },
        ],
    },
    {
        image: hafathahLogo,
        color: '#FFECC8',
        title: 'The Ḥafathah Collective',
        description: "TODO -- add some text abt how i was commissioned, how the webite was built, a combo of wix dev mode plus ui, style inspo, etc. \
        \n\n​Our name, The Ḥafathah Collective, is drawn from the term majmūʿat al-ḥafathah or Bookkeepers, \
        which appears in Syrian prison literature. The Bookkeepers were a group in Tadmur prison that, along with memorizing \
        the Quran and hadith, memorized the registry of prisoners including those who were killed or executed in the hope that \
        if one of them were released they could share that information with detainees’ family members. In Arabic, ḥafath means \
        to preserve or safeguard just as our collective aims to safeguard the work of artists in the MENA region and document \
        their experiences, especially as they relate to prison. ",
        links: [
            { url: 'https://github.com/project2', text: 'Visit the project website', img: '' }
        ],
    },
    {
        image: portfolioIcon,
        color: '#FFD09B',
        title: 'Lawyer Website',
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
        title: 'Noors Card Game',
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
        title: 'Sumayas Volunteer Website',
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
        color: '#FFD09B',
        title: 'Kenans AI radiology thing',
        description: "This website serves as the initial version of my personal portfolio, showcasing my work and skills \
        in software development. It was roughly designed using Figma and built with React-Bootstrap to ensure a modern \
        and responsive layout. For deployment, I used Vercel, making the site easily accessible and scalable.\
        \n\nTODO -- add something about how I like the old internet look and used office supplies as my inspo so that \
        these ppl dont think im building old looking things on accident \
        \n\nThe project is an ongoing work in progress, with frequent updates to reflect my latest projects, \
        add animations, and enhance user experience. Upcoming features include new interactive components and a \
        'dark mode' option, which you can preview in the Figma prototype linked below. Stay tuned for continuous improvements, \
        and thanks for visiting!",
        links: [
            { url: 'https://github.com/jennahshah/personal-website', text: 'Project Repo', img: githubLogo },
            { url: 'https://www.figma.com/design/0DuJdgIkR8s2cv5Jtf9s5D/Untitled?node-id=4-383&t=l1lWvf5F65ZA2gqt-1', text: 'Figma Designs', img: figmaLogo }

        ],
    },
    {
        image: portfolioIcon,
        color: '#B7E0FF',
        title: 'Portfolio Website - First Iteration',
        description: "This website serves as the initial version of my personal portfolio, showcasing my work and skills \
        in software development. It was roughly designed using Figma and built with React-Bootstrap to ensure a modern \
        and responsive layout. For deployment, I used Vercel, making the site easily accessible and scalable.\
        \n\nTODO -- add something about how I like the old internet look and used office supplies as my inspo so that \
        these ppl dont think im building old looking things on accident \
        \n\nThe project is an ongoing work in progress, with frequent updates to reflect my latest projects, \
        add animations, and enhance user experience. Upcoming features include new interactive components and a \
        'dark mode' option, which you can preview in the Figma prototype linked below. Stay tuned for continuous improvements, \
        and thanks for visiting!",
        links: [
            { url: 'https://github.com/jennahshah/personal-website', text: 'Project Repo', img: githubLogo },
            { url: 'https://www.figma.com/design/0DuJdgIkR8s2cv5Jtf9s5D/Untitled?node-id=4-383&t=l1lWvf5F65ZA2gqt-1', text: 'Figma Designs', img: figmaLogo }

        ],
    }, 
      // Add more projects as needed
    
]

export default ProjectsData;