import React from 'react'
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navegacion.css'

export const Navegacion = () => {
  return (
   
    <>

    <Nav className='Navbar'>
    <NavItem> <Link className='Link' to="/home">Home</Link> </NavItem>
    <NavItem><Link className='Link' to="/contacto" >Contacto</Link>   </NavItem>
    <NavItem><Link className='Link' to="/list"  >Lista</Link></NavItem>
    <NavItem><Link className='Link' to="/login"  >Login</Link></NavItem>
    
    </Nav>
    
    </>
  

    
  )
}
export default Navegacion;