import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './cardGamerMAPDetail.css'


export const CardGamerMAPDetail = ({ producto }) => {
	const [counter, setCounter] = useState(1)
	const url = window.location;

	const sumarPrecio = () => {
		counter < 10 && setCounter(counter + 1)
	}
	const restarPrecio = () => {
		counter > 1 && setCounter(counter - 1)
	}

	return (
		<>
			{producto
				&& <div className="container contenedorDetail my-5">
					<div className="columna1 my-3">
						<img src={process.env.PUBLIC_URL + producto.img} alt=""  className="imgDetailProduct"/>
					</div>
					<div className="columna2">
						<p>{producto.brand}</p>
						<p className='name'>{producto.name}</p>
						<div className="prices">
							<p className="prevPrice">
								{`$${new Intl.NumberFormat("es-MX").format(producto.prevPrice)}.00`}
							</p>
							<p className="priceCard text-start font-weight-bold mr-3">
								{`$${new Intl.NumberFormat("es-MX").format(producto.price)}.00`}
							</p>
							<p className='ml-3'>
								{producto.sale}
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
							<a target="_blank" href={`https://wa.me/+17862138782?text=${url.href + ' quantity: ' + counter}%0A%0AHello!%20I%20need%20help%20or%20more%20information%20about%20this%20item.`} className="whatsappButton boton_detail">
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
