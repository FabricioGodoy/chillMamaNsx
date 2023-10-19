import React,{ useEffect, useState} from "react";
import { RequestAllProducts } from "../../helpers/requestAllProducts";
import { Link } from "react-router-dom";
import { Pagination } from "../../helpers/Pagination";

export const Peripherals = () => {
    const [peripheral, setPeripheral] = useState([]);
    const [pagina, setPagina] = useState(1);
  const [cantidadPorPagina, setCantidadPorPagina] = useState(7);

    useEffect(() => {
      RequestAllProducts()
        .then((resp) => {
            setPeripheral(resp.filter((peripherals) => peripherals.peripheral === "yes"));
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const maximo = peripheral.length / cantidadPorPagina
  
    return (
      <>
      <div className="contenedorCardsGamers container-fluid">
         <h1 className=" titleCollection "> Peripheral products</h1>
        {peripheral.slice(
          (pagina-1)*cantidadPorPagina,
          (pagina-1)*cantidadPorPagina+cantidadPorPagina
        ).map((periph) => (
          <div className="cardGamer" key={periph.id}>
            <div className="imgCardGamer">
              <img alt="Answer" className="imgCard" src={periph.img} />
              <div className="text-start">
                {periph.sale === "sale" ? (
                  <p className="sale m-0">Sale</p>
                ) : (
                  <p className="sale m-0">Sold out</p>
                )}
              </div>
            </div>
            <div className="name-brand-price">
              <p className="nameCard mt-3 mb-0">{periph.name}</p>
              <p className="brandCard text-start text-uppercase">{periph.brand}</p>
              <div className="prices">
                <p className="prevPrice">{`$${new Intl.NumberFormat(
                  "es-MX"
                ).format(periph.prevPrice)}.00`}</p>
                <p className="priceCard text-start">{`$${new Intl.NumberFormat(
                  "es-MX"
                ).format(periph.price)}.00`}</p>
              </div>
              <Link
                className={`${periph.sale === "sale" ? "botonCard" : "botonSoldOut"}`}
                to={`/cardGamersDetail/${periph.id}`}
              >
                {`${periph.sale === "sale" ? "Add to cart" : "Sold Out"}`}
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
  