import React, { Component } from "react"
import { Row, Col, Button } from "antd";
import { Layout, Input } from 'antd';
import './MenuFooter.css';
import logo from "../../img/logo.png"
import { HashLink as Link } from 'react-router-hash-link';
const { Content } = Layout;
class MenuFooter extends Component {
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
            <Content style={{ height: "100%", padding: "20px 20px 20px 20px" }}>
                <Row justify="space-around" align="top" gutter={[16, 48]}>

                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <Row><h5>Navegación</h5></Row>

                            <Row  >

                                <Col>
                                    <ul className="menu">
                                        <li>
                                            <Link to="/certificados#sec-certificados" ><div style={{fontSize:"0.8em"}}>Certificaciones</div></Link>
                                        </li>
                                        <li>
                                            <Link to="/certlead-view#sec-somos"><div style={{fontSize:"0.8em"}}>Sobre Nosotros</div></Link>
                                        </li>
                                        <li>
                                            <Link to="/certlead-view#sec-asociado"><div style={{fontSize:"0.8em"}}>Asociados</div></Link>
                                        </li>
                                        <li>
                                            <Link to="/certlead-view#sec-contacto"><div style={{fontSize:"0.8em"}}>Contacto</div></Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className="menu">
                                        <li>
                                            <Link to="#"><div style={{fontSize:"0.8em"}}>Asóciate</div></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><div style={{fontSize:"0.8em"}}>Compañias</div></Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <h5>Suscríbete</h5>
                            <p className="parrafo">Al suscribirse, acepta enviar ocasionalmente boletines electrónicos y correos electrónicos promocionales para las categorías seleccionadas.</p>



                            <Row justify="center">
                                <Col span={12}>
                                    <Input placeholder="axell@email.com" />
                                </Col>
                                <Col span={8}>
                                    <Button type="primary" className="btn-suscribirse" >Suscribirse</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>

                        <img className="logoFooter" src={logo} />

                    </Col>
                </Row>

            </Content>


        );
    }

}
export default MenuFooter;