import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navegacion() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link  href="Home">Home</Nav.Link>
            <Nav.Link  href="List">Lista</Nav.Link>
            <Nav.Link  href="Contacto">Contacto</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default Navegacion;


export const NavPerfil = ()=>{
return(
<>

</>


)




}
