import React, { Component } from "react"
import { Row, Col } from "antd";
import { Layout } from 'antd';
import './Redes.css';
const { Content } = Layout;
class Redes extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    /**
     *  
     */
    render() {

        return (
            <Content style={{ height: "100%", padding: "100px 20px 100px 20px" }}>

                <Row justify="center" align="middle">
                    <h1 ><div className="marcatext">Redes</div> Sociales<hr /></h1>
                </Row>
                <Row justify="center" className="middle" gutter={[16, 16]} >

                    <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a className="btn2" target="_blank" href="https://www.facebook.com/certlead">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </Col>

                    <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a className="btn2" target="_blank" href="https://twitter.com/certlead_">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </Col>
                    <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a className="btn2" target="_blank"  href="https://www.instagram.com/certlead/">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </Col>
                    <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a className="btn2" target="_blank"  href="https://www.linkedin.com/company/certlead/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </Col>


                </Row>

            </Content>


        );
    }

}
export default Redes;