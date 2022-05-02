import React from 'react'
import { Link } from 'react-router-dom'
import { Hamburguer } from '../Hamburguer/Hamburguer'
import { ReactComponent as Logo } from "./logoEGO.svg"
import './NavBar.css'


export const NavBar = () => {


  return (
    <div>
        <nav className='headerNav'>
            <ul>
                <Logo/>
                <Link to="/" className='linksNav'><li>Modelos</li></Link>
                <Link to="/item/5" className='linksNav'><li>Ficha de modelos</li></Link>
            </ul>
            <Hamburguer/>
        </nav>
    </div>
  )
}
