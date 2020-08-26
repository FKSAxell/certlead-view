import { Navbar } from 'react-bootstrap';
import React, {Component} from "react"
import { Layout, Menu,Row,Col,Button,Form, Input, InputNumber,Avatar } from "antd";
import logo from "../img/logo.png"
import sgs from "../img/sgs.png"
import camara from "../img/camara.png"
import consafety from "../img/consafety.png"
import energycontrol from "../img/energycontrol.png"
import semgroup from "../img/semgroup.png"
import certiprof from "../img/certiprof.png"
import Slider from "../components/slider/Slider"
import Certificado from "../components/certificados/Certificados";
import Nosotros from "../components/nosotros/Nosotros"
import Maps from "../img/maps.png"
const { Header, Content, Footer } = Layout;
class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

      render(){
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
            <Header className="app-header-menu">
                <div className="app-header">
                    <div className="logo " >
                        <img src={logo} />
                    </div>
                    <Menu theme="light"  mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Certificaciones</Menu.Item>
                        <Menu.Item key="2">Blog</Menu.Item>
                        <Menu.Item key="3">Quiénes Somos</Menu.Item>
                        <Menu.Item key="4">Associates</Menu.Item>
                        <Menu.Item key="5">Contacto</Menu.Item>
                    </Menu>
                </div>
            </Header>

          

            <Content style={{ padding: '0 50px' }}  >



                <Slider/>



                <Row justify="center" className="tituloSeccion">
                    <h1 ><div className="marcatext">Nuestros</div> Certificados</h1> 
                </Row>
                <Certificado/>
                <Row justify="center">
                    <Button className="vermas" size="large">Ver más Certificaciones</Button>
                </Row>


                
                <Nosotros/>


                <div className="seccion">
                    <Row justify="center" >
                        <h1 ><div className="marcatext">Nuestros</div> Asociados</h1> 
                    </Row>

                    <Row justify="center" align="middle" style={{marginTop:"50px"}}>
                            <Col span={6}  >
                                <img className="centrar" src={sgs} />
                            </Col>

                            <Col span={6} >
                                <img className="centrar" src={camara} />
                            </Col >

                            <Col span={6} >
                                <img className="centrar" src={consafety} />
                            </Col>
                    </Row>

                    <Row justify="center" align="middle" style={{marginTop:"50px"}}>
                            <Col span={6}  >
                                <img className="centrar" src={energycontrol} />
                            </Col>

                            <Col span={6} >
                                <img className="centrar" src={semgroup} />
                            </Col >

                            <Col span={6} >
                                <img className="centrar" src={certiprof} />
                            </Col>
                    </Row>    
                </div>



                <div className="seccion">
                    <Row justify="center" >
                        <h1 ><div className="marcatext">Formulario</div> de Contacto</h1> 
                    </Row>
                    <Row justify="center" align="middle" style={{marginTop:"150px"}}>
                        <Col  span={8}>
                        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name={['user', 'website']} label="Website">
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'introduction']} label="Introduction">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                        </Form>
                        </Col>
                        <Col  span={8} offset={1}>
                        <img  src={Maps} />
                        </Col>
                    </Row>
                </div>




                <div className="seccion">
                    <Row justify="center" >
                        <h1 ><div className="marcatext">Redes</div> Sociales</h1> 
                    </Row>
                    <Row justify="center" align="middle" style={{marginTop:"150px"}}>
                        <Col  span={3}>
                            <Avatar size={140} className="centrar">FB</Avatar>
                        </Col>
                        <Col  span={3} >
                            <Avatar size={140} className="centrar">TW</Avatar>
                        </Col>
                        <Col  span={3} >
                            <Avatar size={140} className="centrar">IG</Avatar>
                        </Col>
                        <Col  span={3} >
                            <Avatar size={140} className="centrar" >LN</Avatar>
                        </Col>
                    </Row>
                </div>




                


            </Content>
            <Footer style={{ textAlign: 'center' }}>Términos y condiciones&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Política de privacidad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Política de cookies</Footer>
            </Layout>
           
           
          );
      }

}
export default HomePage;