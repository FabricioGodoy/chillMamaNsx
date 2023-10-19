import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RequestAllProducts } from "../helpers/requestAllProducts";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [productFilter, setProductFilter] = useState("");
  const [data, setData] = useState("");
  
  const [pagina, setPagina] = useState(1);
  const [resultadoBusqueda, setResultadoBusqueda] = useState(7);

  useEffect(() => {
    RequestAllProducts()
      .then((res) => {
        setData(res);
        setProductFilter(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [data]);

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  function handleInputKeyPress(event) {
    if (event.key === "Enter");
    handleButtonClick();
  }
  const handleButtonClick = () => {
    const filtrado = searchText;
    const searchInput = filtrado.toLowerCase(); 
    setProductFilter(data);
    if (data && searchInput !== "") {
      setProductFilter(
        data.filter((product) => {
          return product.name.toLowerCase().includes(searchInput);
        })
      );
    } else {
      setProductFilter('');
    }
    console.log(productFilter);
  };

  return (
    <>
  {!data ? "loading.." :
        <>
          <div className="search-container">
            <div className="container">
              <input
                placeholder="Type to search..."
                required=""
                className="inputSearch"
                name="text"
                type="text"
                value={searchText}
                onChange={handleInputChange}
                onKeyUp={handleInputKeyPress}
              />
              <div className="icon">
                <svg
                  viewBox="0 0 512 512"
                  className="ionicon"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleButtonClick}
                >
                  <title>Search</title>
                  <path
                    strokeWidth="32"
                    strokeMiterlimit="10"
                    stroke="currentColor"
                    fill="none"
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  ></path>
                  <path
                    d="M338.29 338.29L448 448"
                    strokeWidth="32"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className=" ">
            {/* ESTAR ATENTOS AL NUMERO DE PRODUCTOS */}
            {productFilter && productFilter !== '' && productFilter.length !== 63  &&
              productFilter
                .slice(
                  (pagina - 1) * resultadoBusqueda,
                  (pagina - 1) * resultadoBusqueda + resultadoBusqueda
                )
                .map((searchResult) => (
                  <div className="searchResults" key={searchResult.id}>
                    <Link to={`/cardGamersDetail/${searchResult.id}`} className="linkSearchResults" >
                        <p>{searchResult.name}</p>
                    </Link>
                  </div>
                ))}
          </div>
        </>
}
    </>
  );
};
