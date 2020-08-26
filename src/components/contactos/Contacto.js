import React, { Component } from "react"
import { Row, Col, Button, Card } from "antd";
import { Layout, Menu, Form, Input, InputNumber, Breadcrumb, Select } from 'antd';
import emailjs from "emailjs-com";
import {
    RightCircleOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
class Contacto extends Component {

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
            console.log(values)
            emailjs.send("default_service", "template_L3T9cJUp", values, "user_yoQTrAU2UNMpwNj7m7l2t")
                .then((response) => {
                    console.log("SUCCESS!", response.status, response.text);


                }, (err) => {
                    console.log("FAILED...", err);
                });
        };

        const prefixSelector = (
            <Form.Item name="prefix" noStyle initialValue="593">
                <Select style={{ width: 75 }} >
                    <Option value="593">+593</Option>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                </Select>
            </Form.Item>
        );
        return (
            <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

                <Form.Item name='name' label="Nombres" rules={[{ required: true, message: '¡Ingrese sus nombres!' }]}>
                    <Input />
                </Form.Item>


                <Form.Item
                    name="phone"
                    label="Teléfono"
                    rules={[{ required: true, message: '¡Ingrese su teléfono!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item name='email' label="Correo" rules={[{ required: true, message: '¡Ingrese su correo!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name='introduction' label="Mensaje" rules={[{ required: true, message: '¡Ingrese un mensaje!' }]}>
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item style={{ textAlign: "center" }} >
                    <Button className="vermas" type="primary" htmlType="submit">
                        Enviar
                    </Button>
                </Form.Item>

            </Form>
        );
    }

}
export default Contacto;