import React, { Component } from "react"
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';
import './Nosotros.css';
const { Header, Content, Footer, Sider } = Layout;
class Nosotros extends Component {
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
                <Row justify="space-around" align="middle" >
                    <Col xs={{ span: 24 }} lg={{ span: 10 }}>
                        <Row >
                            <h1><div className="marcatext">Sobre</div> Nosotros<hr /></h1>
                        </Row>
                        <p>
                            Hace 3 años un grupo de jóvenes de latinoamericanos en la ciudad de Washington D.C. soñaban en una manera de agragar valor a los ciudadanos del mundo, todos de carrera diferentes desde ciencias humanisticas a ingenierias.
                            </p>
                        <p>
                            Hoy esa idea ya es una relidad, estamos establecidos en 5 países del mundo aportando a la profesionalización de personas con los mismo sueños que nososotros, hacer de este mundo cada día mejor.
                            </p>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 10 }} >

                        <div
                            className="video"
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%" /* 16:9 */,
                                paddingTop: 25,
                                height: 0
                            }}
                        >
                            <iframe
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                }}
                                src={`https://www.youtube.com/embed/${"G7TvwUDLhc8"}`}
                                frameBorder="0"
                            />
                        </div>
                    </Col>
                </Row>
            </Content>


        );
    }

}
export default Nosotros;