import React, { Component } from "react"
import { Row, Col, Button, Card } from "antd";
import { Layout, Menu, Form, Input, InputNumber, Breadcrumb,Select } from 'antd';
import Contacto from "./Contacto"
import {
    RightCircleOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
class Contactos extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Content style={{ height: "100%", padding: "20px 20px 20px 20px" }}>
                <Row justify="space-around" align="middle">
                    <Col xs={{ span: 24 }} lg={{ span: 10 }}>
                        <Row >
                            <h1 ><div className="marcatext">Detalles</div> de Contacto<hr /></h1>
                        </Row>
                        <p>
                            Teléfono: <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2F30ZUu60%3Ffbclid%3DIwAR1weyRB6uA5fwExvh_jztQrA0lPrdFRxtQUekpFHgj1y3aatKbGTbauu3M&h=AT0JB2YfpTLZsGhUGv7QKujJLpd1EwxKzoNLfxH6WxUXKscuvcKaNTCwlr9qnYG3at2Zc-hh5JDFHUcM13wD6OBdi4fHZaa6zjEQ96o1Gc9JqS_DQNPOQpamJApsrEW_70_f5S6_TPwVBQ1Wgd2p&__tn__=-UK-R&c[0]=AT1ZJryoPYviBF64pkTUhWRnzBhBrFoEAMLm0FcZXiWemJN11_Jg1XSkF07bHtApuwuYhlNmSwpoQEYdD3Pa9VVRb0Et3pqG61j9P6KYj799nDQT2_a_nLE2At30uiPaevwKmvYmHtRw7qFIRg8edeoQIksoME6hF5UuMtSJO5k3e8dJR7U_wNOKygs">+593 96 272 1776</a>
                        </p>
                        <p>
                            Correo: <a href="registros@chkgroup.org">registros@chkgroup.org</a>
                        </p>
                        <p>
                            Dirección: Alexandria, 32 Washingtorn str, 22303
                        </p>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 10 }} >

                        <Contacto/>
                    </Col>
                </Row>
            </Content>
        );
    }

}
export default Contactos;