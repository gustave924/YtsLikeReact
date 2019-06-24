import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, 
    TabContent, TabPane,Row, Col, Button,Nav, NavItem, NavLink, Container} from 'reactstrap';
import { LocalForm, Control, Form, Input } from 'react-redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';


export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
  
    render() {
        return (
            <Modal isOpen={this.props.ModalOpen} toggle={this.props.modalToggle} className="rounded">
                <ModalBody >
                    <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink  className={classnames({ active: this.state.activeTab === '1' })}
                                     onClick={() => { this.toggle('1'); }}>
                                         
                                    Login

                                </NavLink> 
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                     onClick={() => { this.toggle('2'); }}>
                                    Registar
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <LocalForm > 
                                    <Container>
                                        <Row>
                                            <FontAwesomeIcon icon={faUser} size="lg" className="mt-5 mr-2"/>
                                            <Control.text model=".userName" placeholder="UserName" className="col-11 mt-5 align-baseline border border-success" ></Control.text>
                                        </Row>
                                        <Row>
                                            <FontAwesomeIcon icon={faLock} size="lg" className="mt-3 mr-2"/>
                                            <Control.text model=".password" placeholder="Password" className="col-11 mt-3 align-baseline border border-success"></Control.text>
                                        </Row>
                                        <Row>
                                            <Control.button model=".submit" className="btn btn-success col-6 mt-3 mx-auto">Login</Control.button>
                                        </Row>
                                    </Container>
                                </LocalForm>
                            </TabPane>
                            <TabPane tabId="2">
                                <LocalForm>
                                <Container>
                                        <Row>
                                            <FontAwesomeIcon icon={faUser} size="lg" className="mt-3 mr-2"/>
                                            <Control.text model=".userName" placeholder="UserName" className="col-11 mt-3 align-baseline border border-success" ></Control.text>
                                        </Row>
                                        <Row>
                                            <FontAwesomeIcon icon={faEnvelope} size="lg" className="mt-3 mr-2"/>
                                            <Control.text model=".email" placeholder="Email" className="col-11 mt-3 align-baseline border border-success" ></Control.text>
                                        </Row>
                                        <Row>
                                            <FontAwesomeIcon icon={faLock} size="lg" className="mt-3 mr-2"/>
                                            <Control.text model=".password" placeholder="Password" className="col-11 mt-3 align-baseline border border-success"></Control.text>
                                        </Row>
                                        <Row>
                                            <FontAwesomeIcon icon={faLock} size="lg" className="mt-3 mr-2"/>
                                            <Control.text model=".confirmPassword" placeholder="Confirm Password" className="col-11 mt-3 align-baseline border border-success"></Control.text>
                                        </Row>
                                        <Row>
                                            <Control.button model=".registar" className="btn btn-success col-6 mt-3 mx-auto">Registar</Control.button>
                                        </Row>
                                    </Container>
                                </LocalForm>
                            </TabPane>
                        </TabContent>
                    </div>
                </ModalBody>
            </Modal>
        )
    }
}

