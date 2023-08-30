import React from 'react'
import {Link} from 'react-router-dom'
import Carrito from '../CartWidget/Carrito'


const NavBar = () => {
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Tienda Otaku</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link " href="#" >Inicio</a>
        </li>
        <li className="nav-item">   
          <a className="nav-link" href="#">Lista</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <Carrito/>
          </a>
                  </li>
      </ul>
      <span className="navbar-text">
      
      </span>
    </div>
  </div>
</nav>
        </div>
    );
}

export default NavBar