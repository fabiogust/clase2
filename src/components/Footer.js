import React from "react";

import ".././style.css";

import collage1 from ".././img/collage-prendas.jpg";
import collage2 from ".././img/collage2.jpg";
import collage3 from ".././img/collage3.jpg";

function Footer() {
  return (
    <footer>
      <div className="datosFooter">
        <p>
          <span>The Closet Indumentaria</span>
        </p>
        <p>Tel: 260 4 516256</p>
        <p>Ubicación: Av. Sarmiento Nº 55, San Rafael.</p>
        <p>
          Formas de pago: Visa, MasterCard, Naranja, Maestro, Nativa y Mercado
          pago.
        </p>
      </div>

      <div className="pagAmigas">
        <div className="divP">
          <p>Páginas amigas:</p>
        </div>
        <div className="footer-span">
          <span className="paginasAmigas">
            <a
              href="https://www.facebook.com/people/Cintia-Macheroni/100010422517978"
              target="_blank"
            >
              <img className="tam" src={collage1} alt="collage prendas1" />
            </a>
          </span>
          <span className="paginasAmigas">
            <a
              href="https://www.facebook.com/people/Cintia-Macheroni/100010422517978"
              target="_blank"
            >
              <img className="tam" src={collage2} alt="collage prendas2" />
            </a>
          </span>
          <span className="paginasAmigas">
            <a
              href="https://www.facebook.com/people/Cintia-Macheroni/100010422517978"
              target="_blank"
            >
              <img className="tam" src={collage3} alt="collage prendas3" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
