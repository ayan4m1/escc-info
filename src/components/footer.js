import { Link } from 'gatsby';
import { format } from 'date-fns';
import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.currentYear = format(Date.now(), 'yyyy');
  }

  render() {
    return (
      <footer className="my-md-4 pt-md-4 border-top escc-footer m-auto">
        <Container>
          <Row>
            <Col md="6">
              <h5>Resources</h5>
              <Container>
                <ul className="list-unstyled text-small text-center">
                  <li>
                    <Link to="/faq" className="text-muted">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides" className="text-muted">
                      Guides
                    </Link>
                  </li>
                </ul>
              </Container>
            </Col>
            <Col md="6">
              <h5>About</h5>
              <ul className="list-unstyled text-small text-center">
                <li>
                  <a
                    className="text-muted"
                    href="https://github.com/ayan4m1/escc-info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="text-muted"
                    href="https://discord.gg/invite/ctfJPZs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="text-center">
              Copyright &copy; {this.currentYear} ESCC Info
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
