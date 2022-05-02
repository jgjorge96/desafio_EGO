import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

export const ItemList = ({items}) => {
  return (
    <div className='itemsContainer'>
        <h1>Descubrí todos los modelos </h1>

        <nav className='sectionsNav'>
            <ul id='navBar'>
                <span>Filtrar por</span>
                <Link to="/" className='links'><li>Todos</li></Link>
                <Link to="/category/Autos" className='links'><li>Autos</li></Link>
                <Link to="/category/Pickups%20y%20Comerciales" className='links'><li>Pickups y Comerciales</li></Link>
                <Link to="/category/SUVs" className='links'><li>SUVs y Crossovers</li></Link>
            </ul>
            <Dropdown id='dropdown'>
                <Dropdown.Toggle variant="outline-light" className='dropText' >Filtrar por</Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  href="/">Todos</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item  href="/category/Autos">Autos</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item  href="/category/Pickups%20y%20Comerciales">Pickups y Comerciales</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item  href="/category/SUVs">SUVs y Crossovers</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="outline-light" className='dropText' >Ordenar por</Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  href="/">Nada </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item  href="/price/Asc">De <b>menor</b> a <b>mayor</b> precio</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item  href="/price/Desc">De <b>mayor</b> a <b>menor</b> precio</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item  href="/year/Asc">Mas <b>nuevos</b> primero</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="/year/Desc">Mas <b>viejos</b> primero</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>

        <div className='itemsRow'>
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
        </div>
    </div>
  )
}
