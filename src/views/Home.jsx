import Card from '../components/Card/Card';

export default function Home() {

  return (
    <>
      <div className="scroll__container">
        <div className="scroll__item view__content home">
            <div className="home__title">
                <h1>Maria Parra</h1>
                <h2>Desarrolladora y Diseñadora Web</h2>
            </div>
            <div className="home scroll__icon" onClick={() => {
        const cardSection = document.querySelector('.card');
        cardSection.scrollIntoView({ behavior: 'smooth' });
        }}>
                <img className="mouse" src="../../svg/mouse.svg" alt="mouse scroll down" />
                <img className="arrow-down" src="../../svg/arrow-down.svg" alt="arrow scroll down" />
            </div>
        </div>

        <div>
          <Card />
        </div>

      </div>
    </>
  );
}