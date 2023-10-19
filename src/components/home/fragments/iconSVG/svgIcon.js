import React from "react";
import { motion } from "framer-motion";
import "./svgIcon.css"

export const SvgIcons = () => {
  return (
    <motion.div className="container my-5"
    initial={{ opacity: 0, scale: 0.1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1.5,
      delay: 1.5,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    >
      <div className="containerSVG">
        <div className="containerSvgTxt">
          <img
            alt="imgSvgHome"
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/eacf68a60b6792f626ee3c942d85104e81c4e9d6/SB_Uruguay/svg/icono-atencion-personalizada.svg"
            className="iconSvgHome"
          />
          <p>ATENCIÓN PERSONALIZADA</p>
        </div>
        <div className="containerSvgTxt">
          <img
            alt="imgSvgHome"
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/eacf68a60b6792f626ee3c942d85104e81c4e9d6/SB_Uruguay/svg/icono-financiacion.svg"
            className="iconSvgHome"
          />
          <p>FINANCIACIÓN</p>
        </div>
        <div className="containerSvgTxt">
          <img
            alt="imgSvgHome"
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/eacf68a60b6792f626ee3c942d85104e81c4e9d6/SB_Uruguay/svg/icono-precio-competitivo.svg"
            className="iconSvgHome"
          />
          <p>PRECIO COMPETITIVO</p>
        </div>
        <div className="containerSvgTxt">
          <img
            alt="imgSvgHome"
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/eacf68a60b6792f626ee3c942d85104e81c4e9d6/SB_Uruguay/svg/icono-medio-ambiente.svg"
            className="iconSvgHome"
          />
          <p>MEDIO AMBIENTE</p>
        </div>
        <div className="containerSvgTxt">
          <img
            alt="imgSvgHome"
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/eacf68a60b6792f626ee3c942d85104e81c4e9d6/SB_Uruguay/svg/icono-velocidad-de-respuesta.svg"
            className="iconSvgHome"
          />
          <p>VELOCIDAD DE RESPUESTA</p>
        </div>
        <div className="containerSvgTxt">
          <img
            alt="imgSvgHome"
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/eacf68a60b6792f626ee3c942d85104e81c4e9d6/SB_Uruguay/svg/icono-fidelizacion.svg"
            className="iconSvgHome"
          />
          <p>FIDELIZACIÓN</p>
        </div>
        <div className="containerSvgTxt">
          <img
            alt="imgSvgHome"
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/eacf68a60b6792f626ee3c942d85104e81c4e9d6/SB_Uruguay/svg/icono-proteccion-de-canal-de-distribucion.svg"
            className="iconSvgHome"
          />
          <p>PROTECCIÓN DE CANAL DE DISTRIBUCIÓN</p>
        </div>
        <div className="containerSvgTxt">
          <img
            alt="imgSvgHome"
            src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/eacf68a60b6792f626ee3c942d85104e81c4e9d6/SB_Uruguay/svg/icono-entrega-express.svg"
            className="iconSvgHome"
          />
          <p>ENTREGA EXPRESS</p>
        </div>
      </div>
      </motion.div>
  );
};
