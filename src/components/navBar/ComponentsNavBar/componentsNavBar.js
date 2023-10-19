import React, { useEffect, useState } from "react";
import { Pagination } from "../../helpers/Pagination";
import { RequestAllProducts } from "../../helpers/requestAllProducts";
import { Link } from "react-router-dom";

export const ComponentsNavBar = () => {
  const [components, setComponents] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cantidadPorPagina, setCantidadPorPagina] = useState(7);

  useEffect(() => {
    RequestAllProducts()
      .then((resp) => {
        setComponents(
          resp.filter((componentsPc) => componentsPc.components === "yes")
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const maximo = components.length / cantidadPorPagina

  return (
    <>
      <div className="contenedorCardsGamers container-fluid">
        <h1 className=" titleCollection "> Components products</h1>
        {components.slice(
          (pagina-1)*cantidadPorPagina,
          (pagina-1)*cantidadPorPagina+cantidadPorPagina
        ).map((componentsPc) => (
          <div className="cardGamer" key={componentsPc.id}>
            <div className="imgCardGamer">
              <img alt="Answer" className="imgCard" src={componentsPc.img} />
              <div className="text-start">
                {componentsPc.sale === "sale" ? (
                  <p className="sale m-0">Sale</p>
                ) : (
                  <p className="sale m-0">Sold out</p>
                )}
              </div>
            </div>
            <div className="name-brand-price">
              <p className="nameCard mt-3 mb-0">{componentsPc.name}</p>
              <p className="brandCard text-start text-uppercase">
                {componentsPc.brand}
              </p>
              <div className="prices">
                <p className="prevPrice">{`$${new Intl.NumberFormat(
                  "es-MX"
                ).format(componentsPc.prevPrice)}.00`}</p>
                <p className="priceCard text-start">{`$${new Intl.NumberFormat(
                  "es-MX"
                ).format(componentsPc.price)}.00`}</p>
              </div>
              <Link
                className={`${
                  componentsPc.sale === "sale" ? "botonCard" : "botonSoldOut"
                }`}
                to={`/cardGamersDetail/${componentsPc.id}`}
              >
                {`${componentsPc.sale === "sale" ? "Add to cart" : "Sold Out"}`}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <Link to="/" className="linkBack">
        <button className="buttonBack"> Back </button>
      </Link>
    </>
  );
};
