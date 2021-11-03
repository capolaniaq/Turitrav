import React, { useState } from "react"
import MainFooter from "./footertt";
import MainHeader from "./headertt";

function FormLogIn() {
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
                <MainHeader/>

                <div>
                    <div className="fatherform">
                        <div className="sonform">
                            <img className="bannerform" src="imgs/lorouse.jpg" />

                        </div>
                        <div className="sonform">
                            <form onSubmit={handleSubmit}>

                                <label htmlFor="nombre">USUARIO</label>
                                <br />
                                <input className="roundlog" type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange} /><br /><br />


                                <label htmlFor="nombre">CONTRASEÑA</label>
                                <br />
                                <input className="roundlog" type="password"
                                    id="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange} />

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

                            <div className="sonform">

                                <div className="opcionuser">
                                    <div className="sonopcionuser1">
                                        <p><a href="/formnewuser"> <img src="imgs/usernew.png" /><input className="opcioncreate1" type="submit" value="CREAR CUENTA" /></a></p>
                                    </div>
                                    <div className="sonopcionuser1">
                                        <p><a href="/formnewuser"> <img src="imgs/help.png" /><input className="opcioncreate1" type="submit" value="OLVIDÉ MI CONTRASEÑA" /></a></p>
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
export default FormLogIn;