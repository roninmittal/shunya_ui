import React, { Component } from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import circleImg from './assets/img/circle.svg';
import {Navbar,Nav,NavDropdown,Container,Table,Row,Col,Card} from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  
  state = {
    trainedHits:"0",
    trainedErrors:"0",
    trainedAvgTime:"0",
    predictedHits:"0",
    predictedErrors:"0",
    predictedAvgTime:"0",
    regressionTotal : "0",
    classificationTotal : "0",
    timeSeriesTotal : "0",
    recommendationTotal : "0",
    modelHistory:[]
  }

  componentDidMount() {
    axios({
      method: 'post',
      url: "http://try.predictt.ai/automl_webapi/getAPIDetails/",
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: {}
    }).then(res => {
      const {api_details} = res.data;
      for (let i=0;i<api_details.length;i++){
        if(api_details[i].api_type==="train"){
          this.setState({trainedHits:api_details[i].n_hits,trainedErrors:api_details[i].n_erros,trainedAvgTime:api_details[i].avg_resp_time});
        }
        if(api_details[i].api_type==="predict"){
          this.setState({predictedHits:api_details[i].n_hits,predictedErrors:api_details[i].n_erros,predictedAvgTime:api_details[i].avg_resp_time});
        }
      }      
    });

    axios({
      method: 'post',
      url: "http://try.predictt.ai/automl_webapi/getADDetails/",
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: {}
    }).then(res => {
      const {model_history} = res.data;
      const {aggregated_model_info} = res.data;
      const totalData = aggregated_model_info[0]
      this.setState({modelHistory:model_history,regressionTotal:totalData.Regression,classificationTotal:totalData.Classification,timeSeriesTotal:totalData.TimeSeries,recommendationTotal:totalData.Recommendation});

    });

  }



  render() {
    return (
      <div id="wrapper">
        {/* <Nav className= "sidebar bg-gradient-primary sidebar-dark">
        </Nav> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div className="content">
            <Navbar collapseOnSelect className="mb-4 bg-white shadow topbar">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
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
                    <NavDropdown.Item href="#action/3.4">
                      <button className="btn btn-sm btn-danger shadow-sm mr-3">
                      <span>122 Days Remaining </span>
                  </button></NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Container fluid={true}>
              <Row>
                <Col md={8}>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Card className="bg-gradient-primary card-img-holder shadow h-100 py-3">
                        <Card.Body>
                          <img src={circleImg} className="card-img-absolute" alt="circle"></img>
                          <Row noGutters={true} className="align-items-center">
                            <Col className="col-auto">
                              <div className="h5 font-weight-normal text-white mb-2">Regression</div>
                              <div className="mb-0 d-flex">
                                <div className="d-flex align-items-baseline mr-2 h4 font-weight-bold text-white">
                                  1/
                                  <span className="h6">3</span>
                                  <span className="text-xs font-weight-normal ml-1">Used</span></div>
                                <div className="d-flex align-items-baseline font-weight-normal text-white">|</div>
                                <div className="d-flex align-items-baseline ml-2 h4 font-weight-bold text-white">{this.state.regressionTotal} <span className="text-xs font-weight-normal ml-1">Total Model</span></div>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Card className="bg-gradient-success card-img-holder shadow h-100 py-3">
                        <Card.Body>
                          <img src={circleImg} className="card-img-absolute" alt="circle"></img>
                          <Row noGutters={true} className="align-items-center">
                            <Col className="col-auto">
                              <div className="h5 font-weight-normal text-white mb-2">Classification</div>
                              <div className="mb-0 d-flex">
                                <div className="d-flex align-items-baseline mr-2 h4 font-weight-bold text-white">1/<span className="h6">3</span> <span className="text-xs font-weight-normal ml-1">Used</span></div>
                                <div className="d-flex align-items-baseline font-weight-normal text-white">|</div>
                                <div className="d-flex align-items-baseline ml-2 h4 font-weight-bold text-white">{this.state.classificationTotal} <span className="text-xs font-weight-normal ml-1">Total Model</span></div>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Card className="bg-gradient-danger card-img-holder shadow h-100 py-3">
                        <Card.Body>
                          <img src={circleImg} className="card-img-absolute" alt="circle"></img>
                          <Row noGutters={true} className="align-items-center">
                            <Col className="col-auto">
                              <div className="h5 font-weight-normal text-white mb-2">TimeSeries</div>
                              <div className="mb-0 d-flex">
                                <div className="d-flex align-items-baseline mr-2 h4 font-weight-bold text-white">1/<span className="h6">3</span> <span className="text-xs font-weight-normal ml-1">Used</span></div>
                                <div className="d-flex align-items-baseline font-weight-normal text-white">|</div>
                                <div className="d-flex align-items-baseline ml-2 h4 font-weight-bold text-white">{this.state.timeSeriesTotal} <span className="text-xs font-weight-normal ml-1">Total Model</span></div>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Card className="bg-gradient-info card-img-holder shadow h-100 py-3">
                        <Card.Body>
                          <img src={circleImg} className="card-img-absolute" alt="circle"></img>
                          <Row noGutters={true} className="align-items-center">
                            <Col className="col-auto">
                              <div className="h5 font-weight-normal text-white mb-2">Recommendation</div>
                              <div className="mb-0 d-flex">
                                <div className="d-flex align-items-baseline mr-2 h4 font-weight-bold text-white">1/<span className="h6">3</span> <span className="text-xs font-weight-normal ml-1">Used</span></div>
                                <div className="d-flex align-items-baseline font-weight-normal text-white">|</div>
                                <div className="d-flex align-items-baseline ml-2 h4 font-weight-bold text-white">{this.state.recommendationTotal} <span className="text-xs font-weight-normal ml-1">Total Model</span></div>
                              </div>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                    <Row>
                      <Col md={12} className="mb-4">
                        <Card className="border-left-primary shadow h-100">
                          <Card.Body>
                            <Row noGutters={true} className="align-items-center">
                              <Col className="mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Number of requests</div>
                                <div className="mb-0 d-flex">
                                  <div className="d-flex align-items-baseline mb-0 mr-2 h5 font-weight-normal text-gray-800">{this.state.trainedHits} <span className="text-xs font-weight-normal ml-1">Trained</span></div>
                                  <div className="d-flex align-items-baseline font-weight-normal text-gray-800">|</div>
                                  <div className="d-flex align-items-baseline mb-0 ml-2 h5 font-weight-normal text-gray-800">{this.state.predictedHits} <span className="text-xs font-weight-normal ml-1">Predict</span></div>
                                </div>
                              </Col>
                              <Col xs={"auto"}>
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={12} className="mb-4">
                        <Card className="border-left-danger shadow h-100">
                          <Card.Body>
                            <Row noGutters={true} className="align-items-center">
                              <Col className="mr-2">
                                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Number of errors</div>
                                <div className="mb-0 d-flex">
                                  <div className="d-flex align-items-baseline mb-0 mr-2 h5 font-weight-normal text-gray-800">{this.state.trainedErrors} <span className="text-xs font-weight-normal ml-1">Trained</span></div>
                                  <div className="d-flex align-items-baseline font-weight-normal text-gray-800">|</div>
                                  <div className="d-flex align-items-baseline mb-0 ml-2 h5 font-weight-normal text-gray-800">{this.state.predictedErrors} <span className="text-xs font-weight-normal ml-1">Predict</span></div>
                                </div>
                              </Col>
                              <Col xs={"auto"}>
                                <i className="fas fa-exclamation-triangle fa-2x text-gray-300"></i>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={12} className="mb-4">
                        <Card className="border-left-success shadow h-100">
                          <Card.Body>
                            <Row noGutters={true} className="align-items-center">
                              <Col className="mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Avg Response Time</div>
                                <div className="mb-0 d-flex">
                                  <div className="d-flex align-items-baseline mb-0 mr-2 h5 font-weight-normal text-gray-800">{this.state.trainedAvgTime} Sec<span className="text-xs font-weight-normal ml-1">Trained</span></div>
                                  <div className="d-flex align-items-baseline font-weight-normal text-gray-800">|</div>
                                  <div className="d-flex align-items-baseline mb-0 ml-2 h5 font-weight-normal text-gray-800">{this.state.predictedAvgTime} Sec<span className="text-xs font-weight-normal ml-1">Predict</span></div>
                                </div>
                              </Col>
                              <Col xs={"auto"}>
                                <i className="fas fa-clock fa-2x text-gray-300"></i>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                </Col>
              </Row>
              <Row>
                <Col className="mb-4">
                  <Card className="shadow">
                    <Card.Header className="py-3"><h6 className="m-0 font-weight-bold text-primary">Model History</h6></Card.Header>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Model ID</th>
                          <th>Job ID</th>
                          <th>Job status</th>
                          <th>time</th>
                          <th>Problem type</th>
                          <th>Evelution metric</th>
                          <th>Evelution Number</th>
                        </tr>
                      </thead>
                      <tbody>{this.state.modelHistory.map((item, key) =>
                        <tr key = {key}>
                            <td>DSHM-123</td>
                            <td>{item.job_id}</td>
                            <td>DSuccessful</td>
                            <td>{item.job_complete_dt==="NA"?"D2019-03-20 10:12:51":item.job_complete_dt}</td>
                            <td>{item.problem_type==="NA"?"DRegression":item.problem_type}</td>
                            <td>{item.eval_metrics==="NA"?"DAccuracy":item.eval_metrics}</td>
                            <td>D3</td>
                        </tr>)}</tbody>
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
