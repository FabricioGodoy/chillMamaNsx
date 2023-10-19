import React from "react";
import "./home.css";
import "../../App.css";
import CardGamers from "./fragments/cardGamers";
import { SvgIcons } from "./fragments/iconSVG/svgIcon";
import { RedesSociales } from "./fragments/socialMedia/redesSociales";
import SlideHome from "./fragments/slider/SlideHome";
import BannerBrands from "./fragments/bannerBrands/BannerBrands";
import CardOffice from "./fragments/cardOffice";

export const Home = () => {
	return (
		<div className="containerHome">
			{/* <img
				src="https://raw.githubusercontent.com/FabricioGodoy/imagenes/a0f217d49d729709aeead9af550f44d986eb51f9/Sbox-CostaRica/imagenGamerHD.jpg"
				alt="imgBody"
				className="banner"
			/> */}
			<CardGamers />
			<CardOffice/>
			{/* <RedesSociales /> */}
			{/* <SvgIcons /> */}
			<BannerBrands/>
		</div>
	);
};
