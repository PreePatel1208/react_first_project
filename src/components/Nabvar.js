import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Nabvar(props) {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        {props.title}
          {/* <Link className="" to="/" >{props.title} <span className="sr-only" >(current)</span></Link> */}
        </li>
        <li className="nav-item">
        {props.title1}
        {/* <Link className="" to="/about" >{props.title1}</Link> */}
   
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav></div>
  )
}

Nabvar.propTypes = {
    title: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired
  };
  Nabvar.defaultProps  = {
    title: "Home",
    title1: "About"
  };