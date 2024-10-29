import { Container } from "react-bootstrap"; 
import { useState } from "react"; 
//my bootstrap components wont work for some reason

// Map each card item to the project data info, so that each project card uses independent states
function ProjectCard({projects}) {
    return (
        <div className="project-card-container" id="projects">
            {projects.map((project, index)=> (
                <ProjectCardItem project={project} key={index} />
            ))}
        </div>
    )
}

// TODO -- add drop down 
// img: filepath
// color: string
// title: string
// description: string
// links: [{link, text}, {string, string}] TODO -- add animation
function ProjectCardItem ({project}) {
    const [dropped, setDropped] = useState(false);
    
    function splitText(text) {
        return text.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        ))
    }

    return (
        <div className="project-card-box"  style={{backgroundColor: project.color}}>
            <div className="project-img-box" > {/* project image */}
                <img src={project.image} alt="project pic" /> 
            </div>
            <div className="project-text-box">
                <h2>{project.title}</h2>
                {/* project description */}
                {/* TODO -- add some sort of animation for when the full text displays */}
                {dropped ? splitText(project.description): <p>{project.description.split('.')[0] + '...'}</p>}
                {/* create a map of links */}
                {dropped && 
                    <div> 
                        {project.links.map((link, index) => (
                            <a href={link.url} key={index} > 
                                <img src={link.img} alt={link.img}/>
                                <p style={{ margin: 0 }}>{link.text}</p>
                            </a>
                        ))}
                    </div>
                }

                {/* TODO -- add keys section. i.e. 
                    data structures, algorithms, frontend, backend, databases, Python, C++, SQL, React, web,
                    AI, Cybersecurity, LLM.
                    maybe they can be resued in the skills section
                */}

                {/* learn more button */}
                <button onClick={() => setDropped(!dropped)} style={{ backgroundColor: project.color}}> 
                    <div>
                        {dropped? "show less ∧" : "learn more"} 

                    </div>
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;