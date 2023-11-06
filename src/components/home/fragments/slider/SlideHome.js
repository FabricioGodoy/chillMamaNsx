import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './SliderHome.css'

function SlideHome() {
	return (
		<Carousel className="carousel-cont">
			<Carousel.Item className="img-carousel-item">
				<img className="d-block w-100 img-carousel" src={`${process.env.PUBLIC_URL}/img/dibujos/dibujoDiseno2.jpg`} alt="Second slide" />
				<Carousel.Caption className="item-carousel-caption">
					<Link to={`/buzos`} className="boton-slider">REMERAS</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="img-carousel-item">
				<img className="d-block w-100 img-carousel" src={`${process.env.PUBLIC_URL}/img/dibujos/dibujoDiseno.jpg`} alt="Second slide" />
				<Carousel.Caption className="item-carousel-caption">
					<Link to={`/buzos`} className="boton-slider">BUZOS</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="img-carousel-item">
				<img className="d-block w-100 img-carousel" src={`${process.env.PUBLIC_URL}/img/dibujos/dibujoDiseno3.jpg`} alt="Second slide" />
				<Carousel.Caption className="item-carousel-caption">
					<Link to={`/buzos`} className="boton-slider bg-secondary">DISEÑOS</Link>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default SlideHome;