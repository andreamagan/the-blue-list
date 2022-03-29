import './footer.css';

const Footer = () => {
  return (
    <section className="footer__container">
      <div>
        {'Hecho con ❤ por '}
        <a
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/andreamaganrey/"
          rel="noreferrer"
        >
          Andrea Magán
        </a>
      </div>
      <div>
        {'Datos recopilados por '}
        <a
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/beatrizjimenez"
          rel="noreferrer"
        >
          Bea Jiménez
        </a>
        {' y '}
        <a
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/raul-cotrina-secas-31573730"
          rel="noreferrer"
        >
          Raúl Cotrina
        </a>
      </div>
    </section>
  );
};

export default Footer;
