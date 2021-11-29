import React from "react";

const Navbar = () => {
  return (
    <header className="w-100 position-relative">
      <nav id="navbar" className="d-flex w-100 p-3 justify-content-end">
        <a href="#aboutme" className="nav-item mx-2 p-2">
          About me
        </a>
        <a href="#knowledge" className="nav-item mx-2 p-2">
          Conocimientos
        </a>
        <a href="#metodology" className="nav-item mx-2 p-2">
          Metodologia
        </a>
        <a href="#services" className="nav-item mx-2 p-2">
          Aplicaciones
        </a>
        <a href="#footer" className="nav-item mx-2 p-2">
          Contacto
        </a>
      </nav>
      <div className="side-bar">
        <ul className="center-xy flex-column rounded p-3 m-0">
          <li>
            <a href="#navbar" className="fas fa-chevron-circle-up"></a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.instagram.com/ruizpastorino/?hl=es-la"
              className="fab fa-instagram"
            ></a>
          </li>
          <li>
            <a
              target="blank"
              href="http://api.whatsapp.com/send?phone=+543814039662"
              className="fab fa-whatsapp"
            ></a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.facebook.com/gordo.pastor/"
              className="fab fa-facebook"
            ></a>
          </li>
          <li>
            <a
              target="blank"
              href="https://ar.linkedin.com/in/ruizpastorino"
              className="fab fa-linkedin"
            ></a>
          </li>
          <li>
            <a href="#footer" className="fas fa-chevron-circle-down"></a>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Navbar;
