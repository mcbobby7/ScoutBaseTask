import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { gql } from 'apollo-boost';
import {graphql} from 'react-apollo';

const getCountries=gql`
    {
        countries{
            name
        }
    }
`

class ModalButton extends React.Component {
  state = { visible: false };

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
                <div>
                    <h5>{countrey.name}</h5>
                </div>
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
          {this.displayCountries()}
        </Modal>
      </div>
    );
  }
}
export default graphql(getCountries)(ModalButton);