import "./projects.scss";
import projects from './../../assets/projects.json';

export default function Projects() {

  return (
    <>
    
      <div className="projects">
        {projects.map((project, index) => (
          <a href={project.url} target="_blank" key={index}>
            <img src={project.img} alt="Captura del proyecto" />
          </a>
        ))}
      </div>
    
    </>
  );
}
