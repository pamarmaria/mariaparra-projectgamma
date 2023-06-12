import { useEffect, useState } from 'react';

export default function About() {
    return (
        <>
            <div className="view__content about">
                <h1 className="about__title">Hola :)</h1>
                <p className="about__description">Soy Maria, una chica apasionada por la ciencia y la tecnología. Después de graduarme en Bioquímica y Ciencias Biomédicas, decidí seguir mis estudios y obtener un Máster en Criminología y Ciencias Forenses. Sin embargo, durante la pandemia me empecé a interesar por el mundo digital. Así que decidí tomar un nuevo rumbo en mi carrera.</p>
                <p className="about__description">Actualmente me dedico al Diseño UX/UI y al Desarrollo Web, y estoy constantemente formándome en estas áreas. Estoy emocionada de poder aplicar mis conocimientos en ciencia a proyectos innovadores y creativos y me encantaría que el tuyo fuera uno de ellos.</p>
            </div>
        </>
    );
}