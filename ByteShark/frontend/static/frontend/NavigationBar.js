import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import StudyGroup from './StudyGroup'
import ReactDOM from "react-dom";
import MainPage from './Apptest';
import Favors from './Favors';


class Navaigator extends React.Component{

    loadStudyGroup(){
        return(ReactDOM.render(<StudyGroup/>,document.getElementById("test2")));
    }

    loadMainPage(){
        return(ReactDOM.render(<MainPage/>,document.getElementById("root")));
    }

    loadFavor(){
        return(ReactDOM.render(<Favors/>,document.getElementById("test2")));
    }


    render() {
        return(
            <div className={Navaigator}>
                <NavBar sticky="top" expand={"lg"}>
                    <NavbarBrand>
                        ByteShark
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse>
                        <Nav>
                            <Nav.Link onClick={this.loadStudyGroup}>
                                Study Group
                            </Nav.Link>
                            <Nav.Link>
                                Tips
                            </Nav.Link>
                            <Nav.Link onClick={this.loadFavor}>
                                Favors
                            </Nav.Link>
                            <NavDropdown id={"collasible-nav-dropdown"} title={"Menu"}>

                            </NavDropdown>
                        </Nav>
                    </NavbarCollapse>

                </NavBar>
            </div>
        );

    }



}

export default  Navaigator