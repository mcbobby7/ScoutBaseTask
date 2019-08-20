import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';

const getCountries=gql`
    {
        countries{
            name
            code
        }
    }
`
const ModalLayout = styled.div`
`;

class ModalButton extends React.Component {
  state = { visible: false, code: "", disabled: false };


  getCode = (e) => {
      this.setState({
          code: e.target.value, disabled: true
      });
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  displayCountries(){
    var data = this.props.data;
    if(data.loading){
        return(<div>loading</div>);
    }else{
        return data.countries.map(countrey =>{
            return(
                <option key={data.code} value="data.code">{countrey.name}</option>
            );
        })
    }
}

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <ModalLayout>
            <Link to="/country/CA">
            <select name="code" onchange={this.getCode}>
                <option disabled={this.state.disabled} defaultChecked></option>
                {this.displayCountries()}
             </select>
             </Link>

             
          </ModalLayout>
        </Modal>
      </div>
    );
  }
}
export default graphql(getCountries)(ModalButton);