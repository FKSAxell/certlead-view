import React, { Component } from "react"
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import './Redes.css';
import sgs from "../../img/sgs.png"

const { Header, Content, Footer, Sider } = Layout;
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
                        <a className="btn2" href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </Col>

                    <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a className="btn2" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </Col>
                    <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a className="btn2" href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </Col>
                    <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 4 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <a className="btn2" href="#">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </Col>


                </Row>

            </Content>


        );
    }

}
export default Redes;