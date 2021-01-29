import React from 'react'
import { FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItems, 
    NavLinks, 
    NavBtn, 
    NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">dolla</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about">About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItems>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin"> Sign in</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
