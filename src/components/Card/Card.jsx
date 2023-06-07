import { useState } from "react";
import "./card.scss";
import projects from './../../assets/projects.json';

export default function Card() {

  const [activeProject, setActiveProject] = useState(0);

  const handleScroll = function(event) {
    const imgHeight = event.target.scrollHeight / projects.length;
    setActiveProject(parseInt(event.target.scrollTop / (imgHeight * 0.7)));
  }

  return (
    <div className="card">
      <a className="card__link" href={projects[activeProject].url} target="_blank">
        <img src="../../svg/arrow-up-orange.svg" alt="Icono flehca" />
        <p>VER EL PROYECTO</p>
      </a>
      <div className="card__image" onScroll={handleScroll}>
        { projects.map(project => project.featured === true ? <img src={project.img} alt="Captura del proyecto" /> : '')}
      </div>
      <div className="card__dots">
        { projects.map((project, index) => project.featured === true ? <div className={'card__dot' + (index === activeProject ? ' active' : '')} /> : '')}
      </div>
    </div>
  );
}
