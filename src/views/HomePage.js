import { Navbar } from 'react-bootstrap';
import React, { Component } from "react"
import { Row, Col ,Button, Form, Input, InputNumber, Avatar } from "antd";
import logo from "../img/logo.png"
import Slider from "../components/slider/Slider"
import Certificados from "../components/certificados/Certificados";
import Nosotros from "../components/nosotros/Nosotros"
import Asociados from '../components/asociados/Asociados';
import Contactos from '../components/contactos/Contactos';
import Redes from "../components/redes/Redes"
import MenuFooter from "../components/menufooter/MenuFooter";
import MenuNav from "../components/menu/MenuNav";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';


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
          <MenuNav/>
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

          <Contactos />


          <Layout className="site-layout-background">
            <Redes />
          </Layout>

          <MenuFooter />
        </Content>

        <Footer style={{ backgroundColor: "rgb(248, 248, 248)" }}>
          <Row justify="center">
            <p>Copyright© 2020 CertLead - Página creada por <a href="https://www.instagram.com/axellcrk/">Axell Concha</a> | <a href="https://www.instagram.com/piogramec/">Piogram</a></p>
          </Row>

        </Footer>

      </Layout>


    );
  }

}
export default HomePage;