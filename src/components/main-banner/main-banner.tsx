import './main-banner.css';

const MainBanner = () => {
  return (
    <section className="main-banner__container">
      <h1 className="main-banner__title">
        <span className="material-icons">code_off</span>
        {' Encuentra tu próxima formación '}
        <span className="material-icons">code_off</span>
      </h1>
      <p className="main-banner__description">
        Sabemos que hay muchas opciones de bootcamps y cursos, por eso las hemos recopilado para ti.
        Filtra, compara y elige de una forma más rápida y fácil.
      </p>
    </section>
  );
};

export default MainBanner;
