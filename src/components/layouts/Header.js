import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
// import Search from './Search';
import {useDispatch, useSelector} from 'react-redux';
// import {DropdownButton, Dropdown, Image} from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import image from '../../assets/Logo.jpg'
import avatars from '../../assets/default_avatar.png'

export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
      <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand as={Link} to="/">
        <img width="150px" alt='SP Logo' src={image} style={{ height: "40px", width: '40px', borderRadius: '65px', marginRight: '10px' }} />
        SpecialPerson.in
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          {isAuthenticated ? (
            <NavDropdown title={<>
              <img width="40px" height='40px' src={user.avatar ?? avatars} style={{ borderRadius: '100px' }} alt="user avatar" /> &nbsp;
              <span className='text-light'>{user.name}</span>
            </>} id="basic-nav-dropdown">
              {user.role === 'admin' && <NavDropdown.Item onClick={() => { navigate('admin/dashboard'); }}>Dashboard</NavDropdown.Item>}
              <NavDropdown.Item onClick={() => { navigate('/myprofile'); }}>Profile</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={() => { navigate('/wish-list'); }}>Wish List</NavDropdown.Item> */}
              <NavDropdown.Item onClick={() => { navigate('/orders'); }}>Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => { logoutHandler(); }}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button as={Link} to="/login" variant="light">Login</Button>
          )}
          <Nav.Link as={Link} to="/cart">
            <span className='text-light'>Cart&nbsp;<i className="fa-solid fa-cart-plus"></i></span> &nbsp;
            <span className="ml-1" id="cart_count">{cartItems.length}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}
