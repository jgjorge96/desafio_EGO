import React, { useState, useEffect } from 'react'
import { Offcanvas, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Burguer } from "./Burguer.svg"
import './Hamburguer.css'

export const Hamburguer = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
      <>
        <Button variant="outline-light" onClick={handleShow}>
          <Burguer/>
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <ul className='burguerUl'>
              <li>Modelos</li>
              <li>Servicios y Accesorios</li>
              <li>Financiación</li>
              <li className='liBorder'>Reviews y Comunidad</li>
            </ul>
            <ul className='burguerUl'>
              <li>Toyota Mobility Service</li>
              <li>Toyota Gazoo Racing</li>
              <li className='liBorder'>Toyota Híbridos</li>
            </ul>
            <ul className='burguerUl'>
              <li>Concesionarios</li>
              <li>Test Drive</li>
              <li className='liBorder'>Contacto</li>
            </ul>
            <ul className='burguerUl ul1'>
              <li>Actividades</li>
              <li>Servicios al Cliente</li>
              <li>Ventas Especiales</li>
              <li>Innovación</li>
              <li>Prensa</li>
              <li>Acerca de...</li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}