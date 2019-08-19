import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    background-color: #08105b;
    color: white;
    font-size: 10px;
    margin: 0;
    padding-top: 15px;
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    h1 {
        color: white;
    }
`;

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <h1> Copyright Mcbobby Madu.</h1>
            </FooterWrapper>
        );
    }
}

export default Footer;
