import React from "react";

function MainFooter() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted"><img src="/imgs/icons/icono.png" width="50px"/>  &copy; 2021 Turitrav, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#"><img className="sm" src="imgs/twitter1.png" /> </a></li>
                    <li className="nav-item"><a href="#"><img className="sm" src="imgs/instagram1.png" /> </a></li>
                    <li className="nav-item"><a href="#"><img className="sm" src="imgs/facebook1.png" /> </a></li>

                </ul>
            </footer>
        </div>
    )
}

export default MainFooter