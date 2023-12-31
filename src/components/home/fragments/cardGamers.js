import "./cardGamers.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RequestAllProducts } from "../../helpers/requestAllProducts";
import { Link } from "react-router-dom";

export default function CardGamers() {
  const [remeras, setremeras] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cantidadPorPagina, setCantidadPorPagina] = useState(4);

  useEffect(() => {
    RequestAllProducts()
      .then((resp) => {
        setremeras(resp.filter((pc) => pc.category === "Buzos"));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="contenedorCardsGamers container-fluid">
        <h1 className=" titlebuzos "> Buzosssssss</h1>

        {remeras
          .slice(
            (pagina - 1) * cantidadPorPagina,
            (pagina - 1) * cantidadPorPagina + cantidadPorPagina
          )
          .map((pc) => (
            <div className="cardGamer my-3" key={pc.id}>
              <div className="imgCardGamer">
                <img alt="Answer" className="imgCard" src={pc.img} />
                <div className="text-start">
                  {pc.sale === "sale" ? (
                    <p className="sale m-0">Sale</p>
                  ) : (
                    <p className="sale m-0">Sold out</p>
                  )}
                </div>
              </div>
              <div className="name-brand-price">
                <p className="nameCard mt-3 mb-0">{pc.name}</p>
                <p className="brandCard text-start text-uppercase">
                  {pc.brand}
                </p>
                <div className="prices">
                  <p className="prevPrice">{`$${new Intl.NumberFormat(
                    "es-MX"
                  ).format(pc.prevPrice)}.00`}</p>
                  <p className="priceCard text-start">{`$${new Intl.NumberFormat(
                    "es-MX"
                  ).format(pc.price)}.00`}</p>
                </div>
                <Link
                  className={`${
                    pc.sale === "sale" ? "botonCard" : "botonSoldOut"
                  }`}
                  to={`/cardGamersDetail/${pc.id}`}
                >
                  {`${pc.sale === "sale" ? "Add to cart" : "Sold Out"}`}
                </Link>
              </div>
            </div>
          ))}
      </div>
      <Link to="/remeras" className="linkSeeAll">
        <button className="buttonSeeAll"> See all</button>
      </Link>
    </>
  );
}
