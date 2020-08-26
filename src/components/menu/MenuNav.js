import React, { Component } from "react"
import { Row, Col,  } from "antd";
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import './MenuNav.css';
import logo from "../../img/logo.png"
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

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
            <Menu className="menu" theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" className="logo ">
                <img src={logo} />
              </Menu.Item>
              <Menu.Item key="2">Certificaciones</Menu.Item>
              <Menu.Item key="3">Quiénes Somos</Menu.Item>
              <Menu.Item key="4">Asociados</Menu.Item>
              <Menu.Item key="5">Contacto</Menu.Item>
            </Menu>

          </Header>



        );
    }

}
export default MenuNav;