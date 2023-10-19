import React,{ useEffect, useState} from "react";
import { Pagination } from "../../helpers/Pagination";
import { RequestAllProducts } from "../../helpers/requestAllProducts";
import { Link } from "react-router-dom";

export const OfficePcs = () => {
    const [office, setOffice] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [cantidadPorPagina, setCantidadPorPagina] = useState(4);

  useEffect(() => {
    RequestAllProducts()
      .then((resp) => {
        setOffice(resp.filter((ofPc) => ofPc.office === "yes"));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const maximo = office.length / cantidadPorPagina

  return (
    <>
    <div className="contenedorCardsGamers container-fluid">
       <h1 className=" titleCollection "> Office products</h1>
      {office.slice(
          (pagina-1)*cantidadPorPagina,
          (pagina-1)*cantidadPorPagina+cantidadPorPagina
        ).map((PCOffice) => (
        <div className="cardGamer my-3" key={PCOffice.id}>
          <div className="imgCardGamer">
            <img alt="Answer" className="imgCard" src={PCOffice.img} />
            <div className="text-start">
              {PCOffice.sale === "sale" ? (
                <p className="sale m-0">Sale</p>
              ) : (
                <p className="sale m-0">Sold out</p>
              )}
            </div>
          </div>
          <div className="name-brand-price">
            <p className="nameCard mt-3 mb-0">{PCOffice.name}</p>
            <p className="brandCard text-start text-uppercase">{PCOffice.brand}</p>
            <div className="prices">
              <p className="prevPrice">{`$${new Intl.NumberFormat(
                "es-MX"
              ).format(PCOffice.prevPrice)}.00`}</p>
              <p className="priceCard text-start">{`$${new Intl.NumberFormat(
                "es-MX"
              ).format(PCOffice.price)}.00`}</p>
            </div>
            <Link
              className={`${PCOffice.sale === "sale" ? "botonCard" : "botonSoldOut"}`}
              to={`/cardOfficeDetail/${PCOffice.id}`}
            >
              {`${PCOffice.sale === "sale" ? "Add to cart" : "Sold Out"}`}
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
