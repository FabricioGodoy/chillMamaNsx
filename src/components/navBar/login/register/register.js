import React from 'react'
import { useForm } from "react-hook-form";

export const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
      return (
        <div className="containerLogin">
          <img
            src="https://github.com/FabricioGodoy/imagenes/blob/main/Sbox-CostaRica/auriculares-con-micr%C3%B3fono-en-manos-de-joven-africana-feliz-mujer-profesional-gamer-online-banner-videojuegos-210571218.jpg?raw=true"
            alt="Banner Login"
            className="banner"
          />
          <h1>Registrate</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="formLogin ">
       
            <div className="input-group">
              <input
                required
                type="text"
                name="text"
                /* autocomplete="off" */
                className="input"
              />
              <label className="user-label">Nombre</label>
            </div>
       
             <div className="input-group">
              <input
                required
                type="email"
                name="email"
                /* autocomplete="off" */
                className="input"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                })} />
              <label className="user-label">Email</label>
            </div>
            
            <div className="input-group">
              <input
                required
                type="password"
                name="password"
                /* autocomplete="off" */
                className="input"
              />
              <label className="user-label">Password</label>
            </div>
            <div className="input-group">
              <button className="buttonLogin" type="submit">
              Sing in
              </button>
            </div>
          </form>
          <span>
            ¿Ya estás registrado? <a href="/login">Inicia sesión</a>.
          </span>
          <br/>
        </div>
  )
}
