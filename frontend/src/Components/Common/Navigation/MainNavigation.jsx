import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

const MainNavigation = () => {
    return(
    <Navbar bg="primary" variant="dark" expand="md">
        <Navbar.Brand href="#home" style={{marginLeft:"1%"}}>agroCHAIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav style={{marginRight:"1%"}}>
        <Nav.Link>
            <Link to="/" style={{color:"white"}}>Home</Link>
        </Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown" style={{color:"white"}}>
        <NavDropdown.Item href="/buyerdashboard">
            <Nav.Link>
                <Link to="/buyerdashboard" style={{color:"black"}}>Buy Products</Link>
            </Nav.Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/sellerdashboard">
            <Nav.Link>
                <Link to="/sellerdashboard" style={{color:"black"}}>Sell Products</Link>
            </Nav.Link>
        </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>
            <Link to="/about" style={{color:"white"}}>About Us</Link>
        </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default MainNavigation;