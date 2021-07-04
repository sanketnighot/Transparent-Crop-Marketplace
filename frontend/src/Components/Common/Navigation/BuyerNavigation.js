import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BuyersNavigation = () => {
    return(
    <Navbar bg="primary" variant="dark" fixed="top" expand="md">
        <Navbar.Brand href="#home" style={{marginLeft:"1%"}}>agroCHAIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav style={{marginRight:"1%"}}>
        <Nav.Link href="#home">HOME</Nav.Link>
        <NavDropdown title="LOGIN" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Login as Buyer</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Login as Seller</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#features">ABOUT US</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default BuyersNavigation;