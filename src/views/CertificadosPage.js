import React, { Component } from "react"
import { Row, Col } from "antd";
import Certificado from "../components/certificados/Certificado";
import MenuFooter from "../components/menufooter/MenuFooter";
import MenuNav from "../components/menu/MenuNav";
import { Layout } from 'antd';
const { Content, Footer } = Layout;



class CertificadosPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (


            <Layout >

                <div className="fullscreen" id="sec-certificados">
                    <MenuNav />

                </div>

                <Content style={{ padding: '0 0px' }}>

                    <Layout className="site-layout-background">
                        <div style={{ height: "100%", padding: "20px 20px 20px 20px" }}>
                            <Row >
                                <Col offset={1}><h1 ><div className="marcatext">Nuestros</div> Certificados<hr /></h1></Col>
                            </Row>
                            <div class="py-5">
                                <Row justify="center" align="middle">
                                    <Certificado text="IT GOVERNANCE & SERVICE MANAGEMENT" img="https://img.freepik.com/foto-gratis/trabajador-sexo-masculino-fabrica_1303-14306.jpg?size=626&ext=jpg" />
                                    <Certificado text="SCRUM MASTER PROFESSIONAL" img="https://miro.medium.com/max/11128/1*Cr6rEZ9PuolDk6tdv2Dicw.jpeg" />
                                    <Certificado text="DESIGN THINKING" img="https://live.staticflickr.com/65535/49649169217_39c5521920_b.jpg" />
                                    <Certificado text="IT GOVERNANCE & SERVICE MANAGEMENT" img="https://spheremodel.com/blog/wp-content/uploads/2019/10/happy-employees-post.jpg" />
                                    <Certificado text="SCRUM MASTER PROFESSIONAL" img="https://programacion.net/files/article/20180801120827_programar%20codigo.jpg" />
                                    <Certificado text="DESIGN THINKING" img="https://www.foromarketing.com/wp-content/uploads/Tendencias-marketign-digital.jpg" />
                                </Row>
                            </div>
                        </div>
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
export default CertificadosPage;