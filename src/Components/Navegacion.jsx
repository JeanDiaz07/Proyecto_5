import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
function Navegacion() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/List">Lista</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link as={Link} to="/Contacto" >Contacto</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link}>
          Perfil
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navegacion;