import { NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <Nav className='d-flex justify-content-center' activeKey="/link">
        <Nav.Item>
            <Nav.Link as={Link} to="/dash" eventKey="dash">
                Início
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="event-key">
                    item nav
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="event-key">
                    item nav 2
                </NavDropdown.Item>
            </NavDropdown>
        </Nav.Item>
    </Nav>
    // <NavDropdown title="Dropdown" id="nav-dropdown">
    //     NavDropdown.Item, NavDropdown.Divider, etc
    // </NavDropdown>

    // <Nav variant="tabs" defaultActiveKey="/home">
    //   <Nav.Item>
    //     <Nav.Link href="/Dash">Active</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link href="/App">Option 2</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="disabled" disabled>
    //       Disabled
    //     </Nav.Link>
    //   </Nav.Item>
    // </Nav>
  );
}

export default navbar;