import React,{useContext,useState} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand ,Nav,NavItem,NavLink,NavbarText } from 'reactstrap';
import {UserContext} from '../context/UserContext';
import {Link} from 'react-router-dom';
const Header =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const context =useContext(UserContext)

    return(
        <Navbar color="primary" light expand="md">
            <NavbarBrand tag={Link} to='/' className="text-white" >
                Gitdetails
            </NavbarBrand>
            <NavbarText className="text-white" >
                {
                    context.user?.email ? context.user.email :""
                }
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user?.email ? (
                        <NavItem>
                            <NavLink onClick={()=>{context.setUser(null)}} tag={Link} className="text-white" >
                                Logout
                            </NavLink>
                        </NavItem>
                        ) : (
                        <React.Fragment>
                            <NavItem>
                                <NavLink tag={Link} to='/signup' className="text-white" >
                                    Signup
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to='/signin' className="text-white" >
                                    Signin
                                </NavLink>
                            </NavItem>
                        </React.Fragment>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Header;
