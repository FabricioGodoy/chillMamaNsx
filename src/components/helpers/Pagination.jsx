import React, { useState } from "react";
import "./pagination.css";

export const Pagination = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const onKeyDown = e => {
    if (e.keyCode == 13) {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(e.target.value));
      }
    }
  };
  const onChange = e => {
    setInput(e.target.value);
  };

  return (
    <div className="containerPagination">
      <button
        className="previousPage"
        onClick={previousPage}
        disabled={pagina === 1 || pagina < 1}
      >
        <img src="https://img.icons8.com/ios-glyphs/30/000000/double-left--v1.png" />
      </button>
      <input
        name="page"
        autoComplete="off"
        value={input}
        onKeyDown={e => onKeyDown(e)}
        onChange={e => {
          onChange(e);
        }}
      />
      <p>
        <span className="pSpan">of</span>
        {"  "}
        {Math.ceil(maximo)}{" "}
      </p>
      <button
        className="nextPage"
        onClick={nextPage}
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
      >
        <img src="https://img.icons8.com/ios-glyphs/30/000000/double-right--v1.png" />
      </button>
    </div>
  );
};
