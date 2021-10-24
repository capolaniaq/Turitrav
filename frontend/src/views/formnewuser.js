import React, { useState } from "react"
import MainFooter from "./footertt";
import MainHeader from "./headertt";

function FormNewUser() {
    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("enviado");
    };

    return (
        <div>
            <MainHeader />

            <div>
                <div className="fcformnewuser">
                    <div className="subcontainer">
                        <div className="imgnewuser" >
                            <img src="imgs/campista1.jpg" width="500px" />

                        </div>
                    </div>
                    <div className="subcontainer">
                        <div className="fatherformnewuser">
                            <div className="sonform">
                                <h2>Formulario de Registro</h2>
                            </div>

                            <div className="sonform">

                                <form onSubmit={handleSubmit}>
                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="nombre">Nombre</label>
                                            <br />
                                            <input className="roundlog" type="text"
                                                id="nombre"
                                                name="nombre"
                                                value={form.nombre}
                                                onChange={handleChange} />
                                        </div>
                                        <div className="datesuser">
                                            <div className="sondatesuser">
                                                <label htmlFor="apellido">Apellido</label>
                                                <br />
                                                <input className="roundlog" type="text"
                                                    id="apellido"
                                                    name="apellido"
                                                    value={form.apellido}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="nombre">Correo</label>

                                            <br />
                                            <input className="roundlogdatesuser" type="email"
                                                id="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="datesuser">
                                        <div className="sondatesuser">

                                            <label htmlFor="nombre">Contraseña</label>
                                            <br />
                                            <input className="roundlog" type="password"
                                                id="password"
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange} />
                                        </div>

                                        <div className="sondatesuser">

                                            <label htmlFor="nombre">Confirme Contraseña</label>
                                            <br />
                                            <input className="roundlog" type="password"
                                                id="conpass"
                                                name="conpass"
                                                value={form.password}
                                                onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="nombre">Fecha nacimiento</label>
                                            <br />
                                            <input className="roundlog" type="date"
                                                id="edad"
                                                name="edad"
                                                value={form.edad}
                                                onChange={handleChange} />

                                        </div>

                                        <div className="sondatesuser">
                                            <label htmlFor="nombre">Pais</label>
                                            <br />
                                            <input className="roundlog" type="text"
                                                id="Pais"
                                                name="Pais"
                                                value={form.Pais}
                                                onChange={handleChange} />

                                        </div>
                                    </div>
                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="celular">Celular</label>

                                            <br />
                                            <input className="roundlogdatesuser" type="text"
                                                id="celular"
                                                name="celular"
                                                value={form.email}
                                                onChange={handleChange} />
                                        </div>
                                    </div>

                                </form>
                                <div className="sonform">
                                    <br />
                                    <div className="sonsonform">

                                        <ion-icon size="large" name="logo-google" />
                                        <ion-icon size="large" name="logo-twitter" />
                                        <ion-icon size="large" name="logo-facebook" />
                                        <ion-icon size="large" name="logo-github" />

                                    </div>

                                </div>

                                <div>
                                    <input
                                        type="checkbox"
                                        id="terminos"
                                        name="terminos"
                                        required
                                        onChange={handleChecked} />
                                    <label htmlFor="terminos">Acepto terminos y condiciones  </label>
                                    <br />
                                    <br />
                                    <input className="opcioncreate" type="submit" value="CREAR CUENTA" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <MainFooter />

        </div>


    );
}

export default FormNewUser;