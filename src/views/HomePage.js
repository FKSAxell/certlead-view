import { Navbar } from 'react-bootstrap';
import React, { Component } from "react"
import { Row, Col, Button, Form, Input, InputNumber, Avatar } from "antd";
import logo from "../img/logo.png"

import Slider from "../components/slider/Slider"
import Certificados from "../components/certificados/Certificados";
import Nosotros from "../components/nosotros/Nosotros"
import Asociados from '../components/asociados/Asociados';
import Contactos from '../components/contactos/Contactos';
import Redes from "../components/redes/Redes"

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
    const onFinish = values => {
      console.log(values);
    };
    return (


      <Layout >
        <div className="fullscreen">
          <Header className="header">
            <Menu className="menu" theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item className="logo ">
                <img src={logo} />
              </Menu.Item>
              <Menu.Item key="1">Certificaciones</Menu.Item>
              <Menu.Item key="2">Blog</Menu.Item>
              <Menu.Item key="3">Quiénes Somos</Menu.Item>
              <Menu.Item key="4">Associates</Menu.Item>
              <Menu.Item key="5">Contacto</Menu.Item>
            </Menu>

          </Header>
          <Slider />
        </div>

        <Content style={{ padding: '0 0px' }}>

          <Layout className="site-layout-background">
            <Certificados />
          </Layout>

          <Nosotros />

          <Layout className="site-layout-background">
            <Asociados />
          </Layout>

          <Contactos/>


          <Layout className="site-layout-background">
            <Redes />
          </Layout>
        </Content>



        <Footer style={{ backgroundColor: "rgb(248, 248, 248)" }}>
          <Row justify="space-around" align="middle" style={{ marginTop: "150px" }}>
            <Col span={3}>
              <h3 >Links</h3>
              <Row justify="center">
                <Col ><ul style={{ listStyle: "none" }}>
                  <li><a>Certifications</a></li>
                  <li><a>About us</a></li>
                  <li><a>Associates</a></li>
                  <li><a>Contact us</a></li>
                </ul>
                  <ul style={{ listStyle: "none" }}>
                    <li><a>Certifications</a></li>
                    <li><a>About us</a></li>
                    <li><a>Associates</a></li>
                    <li><a>Contact us</a></li>
                  </ul></Col>
              </Row>






            </Col>
            <Col span={3} >

            </Col>
            <Col span={3} >

            </Col>

          </Row>

              Ant Design ©2018 Created by Ant UED</Footer>


      </Layout>


    );
  }

}
export default HomePage;