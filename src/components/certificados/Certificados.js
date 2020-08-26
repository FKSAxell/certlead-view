import React, { Component } from "react"
import { Row, Col, Button, Card } from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';
import Certificado from "./Certificado"
import { HashLink as Link } from 'react-router-hash-link';
import {
  RightCircleOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class Certificados extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <Content style={{ height: "100%", padding: "20px 20px 20px 20px" }}>
       
          <Row justify="center" align="middle">
            <h1 ><div className="marcatext">Nuestros</div> Certificados<hr /></h1>
          </Row>

          <div class="py-5">
            <Row justify="center" align="middle">
              <Certificado text="IT GOVERNANCE & SERVICE MANAGEMENT" img="https://img.freepik.com/foto-gratis/trabajador-sexo-masculino-fabrica_1303-14306.jpg?size=626&ext=jpg" />
              <Certificado text="SCRUM MASTER PROFESSIONAL" img="https://miro.medium.com/max/11128/1*Cr6rEZ9PuolDk6tdv2Dicw.jpeg" />
              <Certificado text="DESIGN THINKING" img="https://live.staticflickr.com/65535/49649169217_39c5521920_b.jpg" />
            </Row>
          </div>

          <Row justify="center" align="middle">
            <Button className="vermas colora" type="primary" href="/certificados"><div style={{color:"white"}}>Ver más Certificaciones</div></Button>
          </Row>

        
      </Content>
    );
  }

}
export default Certificados;
