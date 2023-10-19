import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
/*   window.addEventListener("click", function () {
    var clickLogIn = document.querySelectorById("clickLogIn");
    clickLogIn.classList.toggle("flip-2-ver-left-2", window.click);
  }); */
  return (
    <div className="containerLogin">
      <img
        src="https://github.com/FabricioGodoy/imagenes/blob/main/Sbox-CostaRica/auriculares-con-micr%C3%B3fono-en-manos-de-joven-africana-feliz-mujer-profesional-gamer-online-banner-videojuegos-210571218.jpg?raw=true"
        alt="Banner Login"
        className="banner"
      />
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="formLogin ">
        <div className="input-group">
          <input
            required
            type="text"
            name="text"
            /* autocomplete="off" */
            className="inputLogin"
          />
          <label className="user-label">Nombre</label>
        </div>

        <div className="input-group">
          <input
            required
            type="email"
            name="email"
            /* autocomplete="off" */
            className="inputLogin"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            })}
          />
          <label className="user-label">Email</label>
        </div>

        <div className="input-group">
          <input
            required
            type="password"
            name="password"
            /* autocomplete="off" */
            className="inputLogin"
          />
          <label className="user-label">Password</label>
        </div>
        <div className="input-group">
          <button className="buttonLogin" type="submit">
            Log In
          </button>
        </div>
      </form>
      <span>
        ¿No estás registado?{" "}
        <Link to="/register" /* id="clickLogIn" */>
          Hacelo acá
        </Link>
      </span>
      <br />
    </div>
  );
};
