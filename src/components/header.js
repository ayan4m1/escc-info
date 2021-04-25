import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faRedditAlien } from '@fortawesome/free-brands-svg-icons';

import NavDropdown from 'react-bootstrap/NavDropdown';
import TitleIcon from './titleIcon';

const Escc = () => (
  <NavDropdown
    title={<TitleIcon icon={faListOl} title="ESCC" />}
    id="dropdown-escc"
  >
    <NavDropdown.Item as={Link} to="/escc/origins">
      Origins
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/escc/v1">
      V1
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/escc/v2">
      V2 (Current)
    </NavDropdown.Item>
  </NavDropdown>
);

export default class Header extends Component {
  static propTypes = {
    siteTitle: PropTypes.string
  };

  static defaultProps = {
    siteTitle: ''
  };

  render() {
    const { siteTitle } = this.props;

    return (
      <Navbar variant="dark" expand="lg" className="escc-header">
        <Navbar.Brand>
          <Link to="/">{siteTitle}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/faq">
              <FontAwesomeIcon icon={faQuestionCircle} size="lg" /> FAQ
            </Nav.Link>
            <Escc />
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link
              href="https://reddit.com/r/AdvancedVapeSupply"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <FontAwesomeIcon icon={faRedditAlien} size="lg" /> Reddit
              </Button>
            </Nav.Link>
            <Nav.Link
              href="https://discord.gg/invite/ctfJPZs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <FontAwesomeIcon icon={faDiscord} size="lg" /> Discord
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
