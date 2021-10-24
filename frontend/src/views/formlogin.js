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

                                <label htmlFor="nombre">USERNAME</label>
                                <br />
                                <input className="roundlog" type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange} /><br /><br />


                                <label htmlFor="nombre">PASSWORD</label>
                                <br />
                                <input className="roundlog" type="password"
                                    id="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange} />

                            </form>
                            <div className="sonform">
                                <br />
                                <p>__________________________________</p>
                                <div className="sonsonform">

                                    <ion-icon size="large" name="logo-google" />
                                    <ion-icon size="large" name="logo-twitter" />
                                    <ion-icon size="large" name="logo-facebook" />
                                    <ion-icon size="large" name="logo-github" />

                                </div>

                            </div>

                            <div className="sonform">

                                <div className="opcionuser">
                                    <div className="sonopcionuser">
                                        <p><img src="imgs/usernew.png" />CREAR CUENTA</p>
                                    </div>
                                    <div className="sonopcionuser">
                                        <p><img src="imgs/help.png" />OLVIDE MI CONTRASEÑA</p>
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