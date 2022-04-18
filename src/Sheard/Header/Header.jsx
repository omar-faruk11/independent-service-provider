import { signOut } from 'firebase/auth';
import React from 'react';
import '../../App'
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CoustomLink from '../../Components/CoustomLink';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleLogOut = () =>{
        signOut(auth)
    }
    
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='text-uppercase fw-bold' as={Link} to="/">Dream Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-capitalize fw-bold ">
                        <Nav>
                            <CoustomLink className='menu mx-0 mx-md-2 p-1' to='/'>Home</CoustomLink>
                        </Nav>
                        <Nav>
                            <CoustomLink className='menu mx-0 mx-md-2 p-1' to="/chackout">Chack Out</CoustomLink>
                        </Nav>
                        <Nav><CoustomLink className='menu mx-0 mx-md-2 p-1' to="/blogs">Blogs</CoustomLink></Nav>
                        <Nav><CoustomLink className='menu mx-0 mx-md-2 p-1' to="/about">About Me</CoustomLink></Nav>
                        { !user ?
                            <Nav><CoustomLink className='menu mx-0 mx-md-2 p-1' to="/login">Log In</CoustomLink></Nav>:
                            <Nav role="button" onClick={handleLogOut}>Log Out</Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;