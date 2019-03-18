import React, { Component } from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import {Navbar,Nav,NavDropdown,Container,Table,Row,Col,Card} from 'react-bootstrap';
import { Date } from 'core-js';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Nav className= "sidebar bg-gradient-primary sidebar-dark">
        </Nav>
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="content">
            <Navbar collapseOnSelect className="mb-4 bg-white shadow topbar">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <button className="btn btn-sm btn-danger shadow-sm mr-3">
                    <span>122 Days Remaining </span>
                    <span className="d-none d-sm-inline-block"> For licence expire</span>
                  </button>
                </Nav>
                <Nav className="ml-auto">
                  <Nav.Item className="topbar-divider d-none d-sm-block"></Nav.Item>
                  <NavDropdown title={
                      <div>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Ronin</span>
                        <img className="img-profile rounded-circle" src="https://media.licdn.com/dms/image/C5103AQE-YUkuz-OpMA/profile-displayphoto-shrink_100_100/0?e=1558569600&v=beta&t=CnwfQ_9G8M-2bUVCwPeZ48BBbY5E6BHQadm6vUrLmSU" alt="icon">
                      </img>
                      </div>
                    }
                    id="collasible-nav-dropdown" className="no-arrow" alignRight={true}>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Container fluid={true}>
              {/* <Row>
                <Col>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                </Col>
              </Row> */}
              <Row>
                <Col lg={6} className="mb-4">
                  <Card className="shadow">
                    <Card.Header className="py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Total number of model</h6>
                    </Card.Header>
                    <Table responsive className="mb-0">
                      <tbody>
                        <tr>
                          <td>Regression</td>
                          <td>1/1 Used</td>
                        </tr>
                        <tr>
                          <td>Classification</td>
                          <td>0/1 Used</td>
                        </tr>
                        <tr>
                          <td>TimeSeries</td>
                          <td>0/1 Used</td>
                        </tr>
                        <tr>
                          <td>Recommendation</td>
                          <td>0/1 Used</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                </Col>
                <Col lg={6} className="mb-4">
                  <Card className="shadow">
                    <Card.Header className="py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Active model</h6>
                    </Card.Header>
                    <Table responsive className="mb-0">
                      <tbody>
                        <tr>
                          <td>Regression</td>
                          <td>1/1 Used</td>
                        </tr>
                        <tr>
                          <td>Classification</td>
                          <td>0/1 Used</td>
                        </tr>
                        <tr>
                          <td>TimeSeries</td>
                          <td>0/1 Used</td>
                        </tr>
                        <tr>
                          <td>Recommendation</td>
                          <td>0/1 Used</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg={4} className="mb-4">
                  <Card className="border-left-primary shadow h-100 py-2">
                    <Card.Body>
                      <Row noGutters={true} className="align-items-center">
                        <Col className="mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Number of requests</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">120</div>
                        </Col>
                        <Col xs={"auto"}>
                          <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} className="mb-4">
                  <Card className="border-left-danger shadow h-100 py-2">
                    <Card.Body>
                      <Row noGutters={true} className="align-items-center">
                        <Col className="mr-2">
                          <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Number of errors</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">120</div>
                        </Col>
                        <Col xs={"auto"}>
                          <i className="fas fa-exclamation-triangle fa-2x text-gray-300"></i>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} className="mb-4">
                  <Card className="border-left-success shadow h-100 py-2">
                    <Card.Body>
                      <Row noGutters={true} className="align-items-center">
                        <Col className="mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Avg Response Time</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">1.5 sec</div>
                        </Col>
                        <Col xs={"auto"}>
                          <i className="fas fa-clock fa-2x text-gray-300"></i>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4">
                  <Card className="shadow">
                    {/* <Card.Header className="py-3"><h6 className="m-0 font-weight-bold text-primary">Projects</h6></Card.Header> */}
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Model ID</th>
                          <th>Job ID</th>
                          <th>Job status</th>
                          <th>time</th>
                          <th>Proble type</th>
                          <th>Evelution metric</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>SHM-123</td>
                          <td>SHJ-425</td>
                          <td>Successful</td>
                          <td>{Date.now()}</td>
                          <td>Regression</td>
                          <td>Accuracy</td>
                        </tr>
                        <tr>
                          <td>SHM-123</td>
                          <td>SHJ-425</td>
                          <td>Successful</td>
                          <td>{Date.now()}</td>
                          <td>Regression</td>
                          <td>Accuracy</td>
                        </tr>
                        <tr>
                          <td>SHM-123</td>
                          <td>SHJ-425</td>
                          <td>Successful</td>
                          <td>{Date.now()}</td>
                          <td>Regression</td>
                          <td>Accuracy</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
