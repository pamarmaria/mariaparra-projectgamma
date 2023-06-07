import "./projects.scss";
import projects from './../../assets/projects.json';

export default function Projects() {

  return (
    <div className="projects">
        { projects.map(project => <img src={project.img} alt="Captura del proyecto" />)}
    </div>
  );
}
