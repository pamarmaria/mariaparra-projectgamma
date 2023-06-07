import Card from '../components/Card/Card';

export default function Home() {

  return (
    <>
        <div className="home__content">
            <div className="home__content__headers">
                <h1>Maria Parra</h1>
                <h2>Desarrolladora y Diseñadora Web</h2>
            </div>
            <div className="home__content__scroll" onClick={() => setShowCard(true)}>
                <img className="mouse" src="../../svg/mouse.svg" alt="mouse scroll down" />
                <img className="arrow-down" src="../../svg/arrow-down.svg" alt="arrow scroll down" />
            </div>
        </div>

      <Card />
    </>
  );
}