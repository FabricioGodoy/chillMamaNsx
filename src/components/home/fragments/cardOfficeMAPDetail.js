import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CardOfficeMAPDetail = ({ pcOffice }) => {
	const [counter, setCounter] = useState(0)
	const url = window.location;

	const sumarPrecio = () => {
		counter < 10 && setCounter(counter + 1)
	}
	const restarPrecio = () => {
		counter > 0 && setCounter(counter - 1)
	}
	return (
		<>
			{pcOffice
				&& <div className="container contenedorDetail my-5">
					<div className="columna1 my-3">
						<img src={process.env.PUBLIC_URL + pcOffice.img} alt="" className="imgDetailProduct" />
					</div>
					<div className="columna2">
						<p>{pcOffice.brand}</p>
						<h2>{pcOffice.name}</h2>
						<div className="prices">
							<p className="prevPrice">
								{`$${new Intl.NumberFormat("es-MX").format(pcOffice.prevPrice)}.00`}
							</p>
							<p className="priceCard text-start font-weight-bold mr-3">
								{`$${new Intl.NumberFormat("es-MX").format(pcOffice.price)}.00`}
							</p>
							<p className='ml-3'>
								{pcOffice.sale}
							</p>
						</div>
						<div className="quantity">
							<p>Quantity</p>
							<div className='addRemove'>
								<div className='centrar__botones'>
									<button className='remove' onClick={restarPrecio}>
										<i className="fa-solid fa-minus"></i>
									</button>
									{counter}
									<button className='add' onClick={sumarPrecio}>
										<i className="fa-solid fa-plus"></i>
									</button>
								</div>
							</div>
						</div>
						<div className="buy my-4">
							<Link className="botonSoldOut__detail mb-2">Sold out</Link>
							<a target="_blank" href={`https://wa.me/+17862138782?text=${url.href}%0AHello!%20I%20need%20help%20or%20more%20information%20about%20this%20item.`} className="whatsappButton boton_detail">
								<i className="fa-brands fa-whatsapp chatWithUs"/>
								Chat with us
							</a>
						</div>
					</div>
				</div>
			}
		</>
	);
};
