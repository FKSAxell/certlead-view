import React, { Component } from "react"
import { Row, Col, Button } from "antd";
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import './MenuFooter.css';
import logo from "../../img/logo.png"
import camara from "../../img/camara.png"
import consafety from "../../img/consafety.png"
import energycontrol from "../../img/energycontrol.png"
import semgroup from "../../img/semgroup.png"
import certiprof from "../../img/certiprof.png"
const { Header, Content, Footer, Sider } = Layout;
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

                            <Row >

                                <Col>
                                    <ul className="menu">
                                        <li>
                                            <Button type="link">Certificaciones</Button>
                                        </li>
                                        <li>
                                            <Button type="link">Sobre Nosotros</Button>
                                        </li>
                                        <li>
                                            <Button type="link">Asociados</Button>
                                        </li>
                                        <li>
                                            <Button type="link">Contacto</Button>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className="menu">
                                        <li>
                                            <Button type="link"> Asóciate</Button>
                                        </li>
                                        <li>
                                            <Button type="link">Compañias</Button>
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