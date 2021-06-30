import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const FarmersNavigationBar = () => {
    return(
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">AGRO MARKETPLACE</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#features">ADD CROPS</Nav.Link>
        <Nav.Link href="#pricing">VIEW STOCK</Nav.Link>
        </Nav>
    </Navbar>
    );
}

export default FarmersNavigationBar;