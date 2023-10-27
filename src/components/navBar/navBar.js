import React, { useEffect, useState } from "react";
import "./navBar.css";
import "../../App.css";
import { Login } from "./login/login";
import { Link } from "react-router-dom";
import { SearchBar } from "./searchBar";

const logo = `${process.env.PUBLIC_URL}/img/chillmamaLogo.jpg`

export const NavBar = (props) => {

/*   window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  }); */
  return (
    <header className="header">
      <span className="lineaNegra">CHILL MAMA </span>
      <Link to="/" className="logo">
        <img src={logo} alt="logo navbar" className="brand-tittle" />
      </Link>

      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="toggleLabel">
        <img
          className="menu"
          src="https://img.icons8.com/ios-filled/50/null/menu-rounded.png"
          alt="menu"
        />{" "}
      </label>

      <nav className="navigation">
        <ul>
          <li>
            <Link to="collection">Buzos</Link>
            <ul>
              <li className="listadoScroll">
                {/*  <div title="MARCAS" id="navbarScrollingDropdown">
                  {marcasMapeadas.map((link) => {
                    return (
                      <div key={link.Codigo}>
                        <Link
                          to={`/marcas/${link.Codigo}`}
                          className="listMarcas"
                        >
                          {link.Descripcion}
                        </Link>
                      </div>
                    );
                  })}
                </div> */}
              </li>
            </ul>
          </li>
          <li>
            <Link to="gamingPcs">Women</Link>
            {/*  <ul>
              <li>
                <Link to="/nuestraEmpresa">La Empresa</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>{" "}
              </li>
              <li>
                <Link to="/trabajaConNosotros">Trabaja con nosotros</Link>
              </li>
              <li>
                <Link to="/anticorrupcion">Politica anticorrupción</Link>{" "}
              </li>
              <li>
                <Link to="#">Staff</Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link to="/officePcs">Kids</Link>
            {/*     <ul>
              <li>
                <Link to="/capacitaciones">Capacitaciones</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg" target="_blank">
                  On Demand
                </Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link to="/componentsNavBar">Core</Link>
            {/* <ul>
              <li>
                <Link to="/rma">RMA</Link>
              </li>
              <li>
                <Link to="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf"
                    target="_blank">Catálogo digital</Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link to="/peripherals">Favs</Link>
            {/*   <ul className="listadoScroll">
              <li>
                <Link to="https://www.solutionbox.com.ar/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/argentina.png?raw=true" />
                  <br /> Argentina
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionboxusa.com/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/estadosunidos.png?raw=true" />
                  <br /> Estados Unidos
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionbox.com.uy/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/uruguay.png?raw=true" />
                  <br /> Uruguay
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionbox.com.do/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/Republicadominicana.png?raw=true" />
                  <br />
                  Rep. Dominicana
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionbox.com.hn/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/honduras.png?raw=true" />
                  <br />
                  Honduras
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionbox.com.hk/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/hongkong.png?raw=true" />
                  <br /> Hong Kong
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionbox.com.pa/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/panama.png?raw=true" />
                  <br />
                  Panamá
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionbox.com.sv/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/elsalvador.png?raw=true" />
                  <br /> El Salvador
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionbox.com.gt/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/guatemala.png?raw=true" />
                  <br /> Guatemala
                </Link>
              </li>
              <li>
                <Link to="https://www.solutionbox.com.py/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/paraguay.png?raw=true" />
                  <br /> Paraguay
                </Link>
              </li>
            </ul> */}
          </li>
        </ul>
      </nav>
      {/*   <Link to="/login">
        <img
          src="https://img.icons8.com/pastel-glyph/64/FFFFFF/user-male-circle.png"
          className="iconLogin"
        />
      </Link> */}

      
      
      {/* barra para buscar que no anda  */}
      <SearchBar/>
     
    </header>
  );
};
