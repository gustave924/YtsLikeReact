import React, { Component } from 'react'
import { 
    Container, 
    Row, 
    Col, 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import SearchField from "react-search-field";
import logo from "./../../assets/Images/logo-YTS.svg";
import background from "./../../assets/Images/background2.png";
export default class Home extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    onSearchInputChange = () => {

    }


  render() {
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/" className="mr-auto  ml-4">
                    <img src={logo} alt="Logo"/> 
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar> 
                    <Nav className="ml-auto" navbar>
                        <NavItem className="mr-3">
                            <SearchField
                                placeholder="Search..."
                                onChange={this.onSearchInputChange}
                                searchText="Quick search.."
                                classNames="Search"/>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Browse Movies</NavLink>
                        </NavItem>
                        <NavItem className="ml-5">
                            <button type="button" class="btn btn-outline-light">Login</button>
                        </NavItem>
                        <NavItem className="ml-2">
                            <button type="button" class="btn btn-outline-light">Register</button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div  style={{backgroundImage: `url(${background}`, 
                        backgroundSize: "cover",
                        backgroundPosition:"center center",
                        backgroundRepeat:"no-repeat",
                        width:"98.5vw",
                        height:"98.5vh",
                        opacity:"0.3"
                        }}>
                <div style={{
                    background: "-moz-linear-gradient(45deg, rgba(220,220,220, 0.7), rgba(105,105,105, 0.7) 100%)",
                    background: "-webkit-linear-gradient(45deg, rgba(220,220,220, 0.7), rgba(105,105,105, 0.7) 100%)",
                    background: "-webkit-gradient(linear, 45deg, from(rgba(220,220,220, 0.7)), to(rgba(105,105,105, 0.7)))",
                    background: "-o-linear-gradient(45deg, rgba(220,220,220, 0.7), rgba(105,105,105, 0.7) 100%)",
                    background: "linear-gradient(45deg, rgba(220,220,220, 0.7), rgba(105,105,105, 0.7) 100%)",
                    width:"98.5vw",
                    height:"98.5vh",
                }}>
                
                </div>
            </div>
        </div>
            
    )
  }
}


const backgroundImageSytle = {
    backgroundImage: "url(process.env.PUBLIC_URL + /Assets/Images/background.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}