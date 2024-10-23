import { Container } from "react-bootstrap"; 
//my bootstrap components wont work for some reason

// take in Project image, title, link, github: bool?, background color 
function ProjectCard ({projects}) {
    return (
        // img: filepath
        // color: string
        // title: string
        // description: string
        // links: [{link, text}, {string, string}] TODO -- add animation


        <div className="project-card-container" id="projects">
            {projects.map((project, index)=> (
                <div className="project-card-box" key={index} style={{backgroundColor: project.color}}>
                    <div className="project-img-box" > {/* project image */}
                        <img src={project.image} alt="project pic" /> 
                    </div>
                    <div className="project-text-box">
                        <h2>{project.title}</h2>
                        {/* <p>{project.description}</p> */}
                        {project.description.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}

                        {/* create a map of links */}
                        {project.links.map((link, index) => (
                            <a href={link.url} key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '7px' }}> 
                                <img src={link.img} alt="" style={{ marginRight: '10px', height: '25px', width: '25px'}} />
                                <p style={{ margin: 0 }}>{link.text}</p>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default ProjectCard