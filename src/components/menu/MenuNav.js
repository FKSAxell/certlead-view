import React, { Component } from "react"
import { Row, Col, } from "antd";
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import './MenuNav.css';
import logo from "../../img/logo.png"
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class MenuNav extends Component {
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


            <Header className="header">
                <Row>
                    <Col lg={{ span: 3 }} >
                        <Link to="/certlead-view"><img className="logo" src={logo} /></Link>
                    </Col>
                    <Col xs={6} sm={8} md={16} lg={18}>
                        <Menu className="menu" theme="light" mode="horizontal" defaultSelectedKeys={['1']}>


                            <SubMenu key="1" title={<Link to="/certificados">Certificaciones</Link>}>
                                <Menu.ItemGroup title="Cat1">
                                    <Menu.Item key="setting:1">Certificado 1</Menu.Item>
                                    <Menu.Item key="setting:2">Certificado 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup title="Cat2">
                                    <Menu.Item key="setting:3">Certificado 3</Menu.Item>
                                    <Menu.Item key="setting:4">Certificado 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>

                            <Menu.Item key="2"><Link to="/certlead-view#sec-somos">Quiénes Somos</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/certlead-view#sec-asociado">Asociados</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/certlead-view#sec-contacto">Contacto</Link></Menu.Item>
                        </Menu>
                    </Col>
                </Row>


            </Header>

        );
    }

}
export default MenuNav;