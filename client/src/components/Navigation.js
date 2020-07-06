import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavLink, Collapse, NavbarToggler, NavbarBrand, Container} from 'reactstrap';


function mapStateToProps(state) {
    return {};
}

class Navigation extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };



    render() {
        //Links for Authorised User
        const authorizedLinks = (
          <Fragment>
              <NavItem>
                  <NavLink href="Wall">Twitter Wall</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="Moderation">Moderation</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="Ban">Banned Users</NavLink>
              </NavItem>
          </Fragment>
        );

        return (
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>SurreyDecides</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                {authorizedLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default connect(
    mapStateToProps, null
)(Navigation);