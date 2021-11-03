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
                            <img className="img-new-user" src="imgs/campista.jpg" width="500px" />
                        </div>
                    </div>
                    <div className="subcontainer">
                        <div className="fatherformnewuser">
                            <div className="sonform">
                                <h2><b>Formulario de Registro</b></h2>
                            </div>

                            <div className="sonform">

                                <form onSubmit={handleSubmit}>
                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="name">Nombre</label>
                                            <br />
                                            <input className="roundlog" type="text"
                                                id="nombre"
                                                name="nombre"
                                                value={form.name}
                                                onChange={handleChange} />
                                        </div>
                                        <div className="datesuser">
                                            <div className="sondatesuser">
                                                <label htmlFor="lastname">Apellido</label>
                                                <br />
                                                <input className="roundlog" type="text"
                                                    id="apellido"
                                                    name="apellido"
                                                    value={form.lastname}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="e-mail">Correo</label>

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

                                            <label htmlFor="password">Contraseña</label>
                                            <br />
                                            <input className="roundlog" type="password"
                                                id="password"
                                                name="password"
                                                value={form.password}
                                                onChange={handleChange} />
                                        </div>

                                        <div className="sondatesuser">

                                            <label htmlFor="checkpass">Confirme Contraseña</label>
                                            <br />
                                            <input className="roundlog" type="password"
                                                id="conpass"
                                                name="conpass"
                                                value={form.checkpassword}
                                                onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="age">Fecha nacimiento</label>
                                            <br />
                                            <input className="roundlog" type="date"
                                                id="edad"
                                                name="edad"
                                                value={form.age}
                                                onChange={handleChange} />

                                        </div>

                                        <div className="sondatesuser">
                                            <label htmlFor="country">Pais</label>
                                            <br />
                                            <input className="roundlog" type="text"
                                                id="Pais"
                                                name="Pais"
                                                value={form.country}
                                                onChange={handleChange} />

                                        </div>
                                    </div>
                                    <div className="datesuser">
                                        <div className="sondatesuser">
                                            <label htmlFor="numberphone">Celular</label>

                                            <br />
                                            <input className="roundlogdatesuser" type="text"
                                                id="celular"
                                                name="celular"
                                                value={form.numberphone}
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
                                    <label htmlFor="terminos">Acepto términos y condiciones.  </label>
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