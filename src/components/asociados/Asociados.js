import React, { Component } from "react"
import { Row, Col } from "antd";
import { Layout } from 'antd';
import './Asociados.css';
import sgs from "../../img/sgs.png"
import camara from "../../img/camara.png"
import consafety from "../../img/consafety.png"
import energycontrol from "../../img/energycontrol.png"
import semgroup from "../../img/semgroup.png"
import certiprof from "../../img/certiprof.png"
const { Content } = Layout;
class Asociados extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <Content id="sec-asociado" style={{ height: "100%", padding: "20px 20px 20px 20px" }}>

                <Row justify="center" align="middle">
                    <h1 ><div className="marcatext">Nuestros</div> Asociados<hr /></h1>
                </Row>
                <Row justify="space-around" align="middle" gutter={[16, 48]}>

                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="asociado" src={sgs} />
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="asociado" src={camara} />
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="asociado" src={consafety} />
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="asociado" src={energycontrol} />
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="asociado" src={semgroup} />
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img className="asociado" src={certiprof} />
                    </Col>

                </Row>

            </Content>


        );
    }

}
export default Asociados;