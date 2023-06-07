import Projects from '../components/Projects/Projects';

export default function Portfolio() {
  
    return (
    <>
        <div className="home__content">
            <div className="home__content__headers">
                <h1>portfolio</h1>
            </div>
            <div className="home__content__scroll">
                <img className="mouse" src="../../svg/mouse.svg" alt="mouse scroll down" />
                <img className="arrow-down" src="../../svg/arrow-down.svg" alt="arrow scroll down" />
            </div>
        </div>

        <Projects />
    </>
  );
}