import React, { Component } from "react"
import { Row, Col } from "antd";
import { Layout } from 'antd';
import './Nosotros.css';
const { Content } = Layout;
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
            <Content id="sec-somos" style={{ height: "100%", padding: "20px 20px 20px 20px" }}>
                <Row justify="space-around" align="middle" >
                    <Col xs={{ span: 24 }} lg={{ span: 10 }}>
                        <Row >
                            <h1><div className="marcatext">Sobre</div> Nosotros<hr /></h1>
                        </Row>
                        <p>
                        Certlead es una organización  internacional que se dedica certificar y generar conocimiento de alto nivel, en varios países alrededor del mundo, donde se rige a altos estándares de calidad y certificación.
                        </p>
                        <p>
                        Certlead trabaja arduamente en pro de la sociedad del conocimiento para lograr que más líderes alcancen su propósito en la vida.  
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