import React, { Component } from "react"
import './Certificados.css';
class Certificado extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div class="col-lg-4 mb-3 mb-lg-0" style={{ marginTop: "10px" }}>
        <div class="hover hover-5 text-white rounded"><img src={this.props.img} alt="" />
          <div class="hover-overlay"></div>
          <div class="hover-5-content">
            <h3 class="hover-5-title text-uppercase font-weight-light mb-0"><strong class="font-weight-bold text-white"> {this.props.text}</strong></h3>
          </div>
        </div>
      </div>
    );
  }

}
export default Certificado;
