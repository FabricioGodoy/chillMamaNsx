import React, { useEffect, useState } from "react";
import { RequestAllProducts } from "../../helpers/requestAllProducts";
import { Link } from "react-router-dom";
import { Pagination } from "../../helpers/Pagination";

import "./buzos.css";

export function Buzos() { 
  const [buzos, setbuzos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cantidadPorPagina, setCantidadPorPagina] = useState(10);

  useEffect(() => {
    RequestAllProducts()
      .then((resp) => {
        setbuzos(resp.filter((collect) => collect.buzo === "yes"));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const maximo = buzos.length / cantidadPorPagina


  return (
    <>
      {" "}
      <div className="contenedorCardsGamers container-fluid">
        <h1 className=" titlebuzos "> Buzos Chill Mama</h1>
        {buzos.slice(
          (pagina-1)*cantidadPorPagina,
          (pagina-1)*cantidadPorPagina+cantidadPorPagina
        ).map((collect, i) => (
          <div className="cardGamer" key={collect.id}>
            <div className="imgCardGamer">
              <img alt="Answer" className="imgCard" src={collect.img} />
              <div className="text-start">
                {collect.sale === "sale" ? (
                  <p className="sale m-0">Sale</p>
                ) : (
                  <p className="sale m-0">Sold out</p>
                )}
              </div>
            </div>
            <div className="name-brand-price">
              <p className="nameCard mt-3 mb-0">{collect.name}</p>
              <p className="brandCard text-start text-uppercase">
                {collect.brand}
              </p>
              <div className="prices">
                <p className="prevPrice">{`$${new Intl.NumberFormat(
                  "es-MX"
                ).format(collect.prevPrice)}`}</p>
                <p className="priceCard text-start">{`$${new Intl.NumberFormat(
                  "es-MX"
                ).format(collect.price)}`}</p>
              </div>
              <Link
                className={`${
                  collect.sale === "sale" ? "botonCard" : "botonSoldOut"
                }`}
                to={`/cardGamersDetail/${collect.id}`}
              >
                {`${collect.sale === "sale" ? "Add to cart" : "Sold Out"}`}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>
      <Link to="/" className="linkBack">
        <button className="buttonBack"> Back </button>
      </Link>
    </>
  );
}
