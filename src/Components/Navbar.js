import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {


  return (
    <nav className={'navbar navbar-expand-lg navbar-dark bg-dark'} >
    <div className="container-fluid" >
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">{props.about}</a>
            </li>
        </ul>
       {/*  <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Backgroundthemes
          </button>
          <ul className="dropdown-menu bg-white" aria-labelledby="dropdownMenuButton1">
            <li><button type='button' className="btn btn-outline-dark" onClick={props.Togglemode1}> Black Theme</button></li>
            <li><button type='button' className="btn btn-outline-primary" onClick={props.Togglemode2}> Blue Theme</button></li>
            <li><button type='button' className="btn btn-outline-success" onClick={props.Togglemode3}> Green Theme</button></li>
            <li><button type='button' className="btn btn-outline-light" onClick={props.Togglemode4}> Light Theme</button></li>



          </ul>
        </div>
       {/*  <div className="form-check form-switch text-light">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onClick={props.Togglemode1}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
        </div> */}
    </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};
/* Navbar.defaultProps = {
  title: 'Heading',
  about: 'About'
}; */

