import "./cardGamers.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RequestAllProducts } from "../../helpers/requestAllProducts";
import { Link } from "react-router-dom";

export default function CardOffice() {
  const [officePc, setOfficePc] = useState([]);

  useEffect(() => {
    RequestAllProducts()
      .then((resp) => {
        setOfficePc(resp.filter((pc) => pc.office === "yes"));
        //     console.log(officePc);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="contenedorCardsGamers container-fluid">
        <h1 className=" titleCollection "> Office products</h1>

        {officePc.map((pc) => (
          <div className="cardGamer" key={pc.id}>
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
              <p className="brandCard text-start">{pc.brand}</p>
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
                to={`/cardOfficeDetail/${pc.id}`}
              >
                {`${pc.sale === "sale" ? "Add to cart" : "Sold Out"}`}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/officePcs" className="linkSeeAll">
        <button className="buttonSeeAll"> See all</button>
      </Link>
    </>
  );
}
