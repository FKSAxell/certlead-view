import React, {Component} from "react"
import { Divider,Row,Col } from "antd";
import './Slider.css';
import empresario from "../../img/empresario.png"
import empresario2 from "../../img/empresario2.png"
import empresario3 from "../../img/empresario3.png"
import Carousel from 'react-bootstrap/Carousel'

import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

      render(){
      
        return (
            <Carousel interval={4000} fade={true} className="" controls={false}>
              <Carousel.Item >
                <img
                  className="d-block Carousel-slide celular"
                  src={empresario}
                  alt="First slide"
                />

                <OverPack style={{ overflow: 'hidden' }} >
                <TweenOne key="0" animation={{ opacity: 1 }} style={{ opacity: 0 }}/>
                <QueueAnim key="queue" leaveReverse component={Carousel.Caption}>
                     <div key="1"><h3>We certify <div className="marcatext">leaders</div></h3></div>  
                     <div key="2"> <hr/></div>
                     <div key="3"><h4>see our certifications</h4></div>
                </QueueAnim>
                </OverPack>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block Carousel-slide  celular"
                  src={empresario2}
                  alt="Third slide"
                />
            
                
            <OverPack style={{ overflow: 'hidden' }} >
                <TweenOne key="0" animation={{ opacity: 1 }} style={{ opacity: 0 }}/>
                <QueueAnim key="queue" leaveReverse  component={Carousel.Caption}>
                     <div key="1"><h3>We certify <div className="marcatext">leaders</div></h3></div>  
                     <div key="2"> <hr/></div>
                     <div key="3"><h4>see our certifications</h4></div>
                </QueueAnim>
                </OverPack>
                
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block Carousel-slide  celular"
                  src={empresario3}
                  alt="Third slide"
                />
            
            <OverPack style={{ overflow: 'hidden' }} >
                <TweenOne key="0" animation={{ opacity: 1 }} style={{ opacity: 0 }}/>
                <QueueAnim key="queue" leaveReverse  component={Carousel.Caption}>
                     <div key="1"><h3>We certify <div className="marcatext">leaders</div></h3></div>  
                     <div key="2"> <hr/></div>
                     <div key="3"><h4>see our certifications</h4></div>
                </QueueAnim>
                </OverPack>
              </Carousel.Item>
          </Carousel>
          );
      }

}
export default Slider;